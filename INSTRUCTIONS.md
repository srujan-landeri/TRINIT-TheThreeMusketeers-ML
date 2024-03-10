To run the Road Damage Detection System, Clone the repository and follow these instructions for each component:

1. **Web Application:**
   - Navigate to the `website` directory and install dependencies using `npm install`.
   - Set up Firebase for authentication and storage. Create a Firebase project, enable Firebase Authentication and Cloud Storage, and obtain your Firebase configuration details.
   - Update the Firebase configuration in the project's code.. `we have provided our keys as of now, for ease of reproduction of outputs.`
   - Run the web application using `npm start`.
   - Access the web application through a web browser at the specified port(3000).

2. **Mobile Application:**
   - Navigate to the `app` directory and install dependencies using `npm install`.
   - Set up Firebase for authentication and storage. Use the same Firebase project created for the web application and update the Firebase configuration in the mobile app code. `we have provided our keys as of now, for ease of reproduction of outputs.`
   - Run the mobile application on an emulator or a physical device connected via usb or wireless debugging using `npx react-native run-android`, or use `npm run android`.
   - The simplest method is to install `expo go` app, and run the app on it, using `npm start`.
   - The mobile application will launch on the emulator/device, allowing users to sign up, log in, and upload photos of damaged roads.

3. **Admin Dashboard (Web Interface):**
   - The initial steps are the same as `1. Web Application`.
   - Access the admin dashboard through a web browser at the specified URL, by logging in as admin. use `srujanlanderi@gmail.com` and `srujan12345` as email and password for logging in as admin.
   - Access the dashboard features, including road data management and map visualization.

3. **Object Detection Model:**
   - Navigate to the `backend` directory and install dependencies using `pip install -r yolov5/requirements.txt`.
   - use python `app.py` to run the model.

NOTE: The backend urls might have to be changed due to change in ip addresses. Some fields have been left empty for convineience.

Ensure that you have the necessary tools and dependencies installed for running React and React Native applications, such as Node.js, npm, and the React Native CLI. Additionally, make sure to configure Firebase properly and handle any environment-specific configurations or setup requirements specified in the project documentation.

Thank You.
