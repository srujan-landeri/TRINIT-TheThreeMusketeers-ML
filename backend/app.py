from fastapi import FastAPI, HTTPException
import uvicorn
from pydantic import BaseModel
import subprocess
from PIL import Image
import base64
from io import BytesIO
import os
import shutil
import firebase_admin
from firebase_admin import credentials, firestore, storage


# Initialize Firebase
cred_path = r'automaticroaddamagedetection-firebase-adminsdk-7g7fh-da752a7a59.json'  
cred = credentials.Certificate(cred_path)
firebase_app = firebase_admin.initialize_app(cred)
db = firestore.client()


app = FastAPI()

class DetectionRequest(BaseModel):
    image: str
    latitude: str
    longitude: str

def clear_directory(directory: str):
    if os.path.exists(directory):
        shutil.rmtree(directory)
    os.makedirs(directory, exist_ok=True)

def convert_image_to_base64(image_path):
    with open(image_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode('utf-8')

@app.post("/detect/")
async def detect_image(request: DetectionRequest):
    annotated_dir = "annotated"
    clear_directory(annotated_dir)

    try:
        image_data = base64.b64decode(request.image)
        img = Image.open(BytesIO(image_data))
        temp_img_path = os.path.join(annotated_dir, "temp_image.jpg")
        img.save(temp_img_path)
    except Exception as e:
        raise HTTPException(status_code=400, detail="Invalid image data")

    try:
        output_dir = os.path.join(annotated_dir, "exp")
        subprocess.run([
            'python', 'yolov5/detect.py',
            '--weights', 'yolov5/model.pt',
            '--source', temp_img_path,
            '--project', annotated_dir,
            '--name', 'exp',
            '--img', '600',
            '--conf', '0.25',
            '--save-txt',
        ], check=True)
    except subprocess.CalledProcessError as e:
        raise HTTPException(status_code=500, detail="Error in object detection")

    labels_dir = os.path.join(output_dir, "labels")
    class_mapping = {0: 'D20', 1: 'D40', 2: 'D10', 3: 'D00'}
    classes_found = []

    if os.path.exists(labels_dir):
        for file_name in os.listdir(labels_dir):
            with open(os.path.join(labels_dir, file_name), "r") as f:
                for line in f:
                    class_id = int(line.split()[0])  # Assuming class_id is the first element
                    class_name = class_mapping.get(class_id, None)
                    if class_name:
                        classes_found.append(class_name)

    # Convert and upload the annotated image, then get its public URL
    annotated_images_dir = output_dir  # Adjust based on where YOLO saves annotated images
    annotated_image_path = None
    for image_file in os.listdir(annotated_images_dir):
        if image_file.endswith(".jpg") or image_file.endswith(".png"):
            annotated_image_path = os.path.join(annotated_images_dir, image_file)
            break

    if annotated_image_path:
        annotated_image_base64 = convert_image_to_base64(annotated_image_path)
    else:
        raise HTTPException(status_code=404, detail="Annotated image not found")

    # Data organization and upload to Firestore
    # for class_name in set(classes_found):
    #     doc_ref = db.collection(u'outputs').document()
    #     doc_data = {
    #         "image": annotated_image_base64,
    #         # "labels": classes_found, 
    #         "latitude": request.latitude,
    #         "longitude": request.longitude
    #     }
    #     doc_ref.set(doc_data)

    firestore_data = {}
    for class_name in set(classes_found):
        if class_name not in firestore_data:
            firestore_data[class_name] = []

        firestore_data[class_name].append({
            "image": annotated_image_base64,
            "latitude": request.latitude,
            "longitude": request.longitude
        })

    # Upload to Firestore
    for class_name, data_array in firestore_data.items():
        # Here we're using `set()` with `merge=True` to append to an existing array
        # or create it if it does not exist.
        db.collection(u'images').document(class_name).set({
            class_name: firestore.ArrayUnion(data_array)
        }, merge=True)

    # shutil.rmtree(annotated_dir, ignore_errors=True)

    return {"message": "Detection processed and results saved to Firestore based on class."}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8888)
