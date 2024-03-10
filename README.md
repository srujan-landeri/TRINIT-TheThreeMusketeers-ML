# TRINIT-TheThreeMusketeers-ML

## video link: https://drive.google.com/drive/folders/113GMsWvdYQhvsIYLvfjYLQcyItEqbhaO?usp=sharing

# Table of Contents

1. [Problem Statement](#problem-statement)
2. [Idea](#idea)
   - [Web Application (User Interface)](#web-application-user-interface)
     - [User Authentication](#user-authentication)
     - [Login Page](#login-page)
     - [Signup Page](#signup-page)
     - [Photo Upload](#photo-upload)
   - [Mobile Application (User Interface)](#mobile-application-user-interface)
     - [User Authentication](#user-authentication-1)
     - [Login Page](#login-page-1)
     - [Signup Page](#signup-page-1)
     - [Photo Upload](#photo-upload-1)
   - [Admin Dashboard (Web Interface)](#admin-dashboard-web-interface)
     - [Authentication](#authentication)
     - [Road Data Management](#road-data-management)
     - [Filtered Road Images](#filtered-road-images)
     - [Detailed View of Damaged Road](#detailed-view-of-damaged-road)
     - [Map Visualization](#map-visualization)
     - [Damaged Road Images Flagged on Map](#damaged-road-images-flagged-on-map)
   - [Machine Learning Component (Backend)](#machine-learning-component-backend)
     - [Object Detection](#object-detection)
     - [Integration with Web and Mobile Apps](#integration-with-web-and-mobile-apps)
     - [Firebase Integration](#firebase-integration)
   - [Deployment and Scalability](#deployment-and-scalability)
     - [Firebase Integration](#firebase-integration-1)
     - [Cloud Deployment](#cloud-deployment)
     - [Continuous Monitoring and Improvement](#continuous-monitoring-and-improvement)


# Problem Statement
Manual inspection of road conditions is a time-consuming and labor-intensive task, leading to delays in identifying and repairing damaged roads. The goal is to develop a classification model capable of automatically detecting and categorizing road damage from images (captured through CC cameras,phone,etc.).

# Idea
The Road Damage Detection System revolutionizes infrastructure maintenance by harnessing the power of modern technology. The live feeds from CCTV cameras can be directly fed into the backend/model, to detect the damaged roads. Also through a seamless integration of web and mobile interfaces, users can effortlessly upload images of damaged roads, enabling swift identification and categorization of road damages. Leveraging state-of-the-art machine learning algorithms, such as YOLO (You Only Look Once), the system accurately detects and locates various types of road damages, including longitudinal cracks, transverse cracks, alligator cracks, and potholes. An intuitive admin dashboard provides administrators with a comprehensive overview of the uploaded road data, empowering them to efficiently manage and visualize the road damages on an interactive map. By streamlining the inspection process and facilitating timely repairs, the Road Damage Detection System ensures safer and well-maintained road networks, ultimately enhancing infrastructure management and road safety for communities worldwide.

Let's break down the product into its components: the web application for users to upload photos, the mobile app for the same purpose, and the admin dashboard for managing and visualizing the data.

### Web Application (User Interface)

![Screenshot](output_screenshots/website/firstpage.png)

#### User Authentication:
- The web application provides a user authentication system powered by Firebase Authentication.
- Users can sign up for an account or log in using their email and password.
- Firebase Authentication handles user registration, login, and password reset functionalities securely.

#### Login Page
![Screenshot](output_screenshots/website/loginpage.png)

#### Signup Page
![Screenshot](output_screenshots/website/signup_page.png)

#### Photo Upload:
- Authenticated users can upload photos of damaged roads through the web application.
- The photo upload feature includes an intuitive user interface allowing users to select and upload images easily.
- Upon uploading, the photos are securely stored in Firebase Cloud Storage.


#### Upload Image
![Screenshot](output_screenshots/website/homepage.png)

### Mobile Application (User Interface)

#### User Authentication:
- The mobile application also integrates Firebase Authentication for user authentication.
- Users can sign up for an account or log in using their email and password, similar to the web application.
- Firebase Authentication ensures a seamless and secure login experience for mobile users.

#### Login Page
![Screenshot](output_screenshots/mobile_app/login.jpeg)

#### Signup Page
![Screenshot](output_screenshots/mobile_app/signup.jpeg)


#### Photo Upload:
- Similar to the web application, the mobile app allows users to upload photos of damaged roads.
- The mobile app interface provides a user-friendly experience optimized for mobile devices.
- The user can choose a photo from the gallery, or take a photo from the inbuilt cameras.
- Uploaded photos are stored securely in Firebase Cloud Storage, just like in the web application.

#### Homepage
![Screenshot](output_screenshots/mobile_app/homapage.jpeg)

#### Capture Photo from Camera
![Screenshot](output_screenshots/mobile_app/camera_image.jpeg)

#### Choose Photo from Gallery
![Screenshot](output_screenshots/mobile_app/image_editable.jpeg)



### Admin Dashboard (Web Interface)

#### Authentication:
- The admin dashboard requires authentication for access to sensitive data and functionalities.
- Only authorized users with administrative privileges can access the admin dashboard.
- Firebase Authentication is used to authenticate admin users securely.

![Screenshot](output_screenshots/website/loginpage.png)

#### Road Data Management:
- The admin dashboard provides a comprehensive overview of all uploaded photos of damaged roads.
- Admins can view, filter, and manage the road data, categorized by the type of damage (e.g., longitudinal crack, transverse crack, pothole).
- The dashboard includes features for searching, sorting, and filtering road data to facilitate efficient management.

#### Filtered Road Images
![Screenshot](output_screenshots/website/admin_website/filtered_road_damages2.png)

#### Detailed View of Damaged Road:
![Screenshot](output_screenshots/website/admin_website/details_of_damage.png)


#### Map Visualization:
- One of the key features of the admin dashboard is the map visualization of the damaged roads.
- The geo data from images will be extracted, so that the exact location of the damaged road can be known.
- Admins can view the damaged roads overlaid on a map, color-coded and labeled according to the type of damage.
- Google Maps API integration is used to render the map and display the road data visually.

#### Damaged Road Images Flagged on Map
![Screenshot](output_screenshots/website/admin_website/varoius_damaged_roads_flagged_on_map.png)


### Machine Learning Component (Backend)

#### Object Detection:
- The machine learning component of the system utilizes YOLO (You Only Look Once) object detection algorithm.
- YOLO is trained to detect and locate various types of road damages, including longitudinal cracks, transverse cracks, alligator cracks, and potholes.
- The machine learning model is trained on a diverse dataset of road images annotated with bounding boxes indicating the location and type of damage.

![Screenshot](output_screenshots/model/D00.jpeg)

![Screenshot](output_screenshots/model/D10.jpeg)

![Screenshot](output_screenshots/model/D20.jpeg)

![Screenshot](output_screenshots/model/D40.jpeg)

#### Integration with Web and Mobile Apps:
- Upon user photo upload through the web or mobile app, the images are processed using the YOLO algorithm for road damage detection.
- The detected damages are categorized and stored along with the uploaded photos in Firebase Realtime Database.
- The web and mobile apps retrieve and display the detected damages from the database, providing users with insights into road conditions.

#### Firebase Integration:
![Screenshot](output_screenshots/model/firebase_storage.jpeg)


### Deployment and Scalability

#### Firebase Integration:
- The Road Damage Detection System leverages Firebase services for authentication, cloud storage, and real-time database.
- Firebase provides a scalable and reliable platform for hosting web and mobile applications, as well as storing and managing data securely.

#### Cloud Deployment:
- Ideally, The web application, mobile application, and admin dashboard will be deployed to cloud hosting services such as Firebase Hosting or other platforms like AWS, Google Cloud Platform, or Azure.
- Cloud deployment ensures high availability, scalability, and reliability of the system, allowing users to access the applications from anywhere and at any time.

#### Continuous Monitoring and Improvement:
- The system undergoes continuous monitoring to ensure optimal performance and reliability.
- Usage analytics and feedback from users and admins are collected to identify areas for improvement and optimization.
- Regular updates and enhancements are implemented to address user needs and improve the overall user experience.


By implementing the Road Damage Detection System with separate interfaces for web, mobile, and admin, along with a robust backend powered by machine learning, the system offers a comprehensive solution for identifying and managing road damages efficiently. The integration with Firebase and cloud deployment ensures scalability, reliability, and security, making it a valuable tool for infrastructure maintenance and management.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
