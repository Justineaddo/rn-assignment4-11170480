

## Jobizz App

This is a React Native application called Jobizz. The application allows users to log in and view job listings, including a featured job section.

### components
App.js
The main entry point of the application. It sets up the navigation using a drawer navigator to switch between the login screen and the job screen.

LoginScreen.js
A screen that allows users to log in by entering their name and email. Upon pressing the login button, the user is navigated to the Job screen, and the login details are passed as props.

Usage: Collects user's name and email and handles the login process.
Props:
onLogin: A callback function passed from App.js to handle the login action.
JobScreen.js
A screen that displays job listings, including a featured job section.

Usage: Displays job information such as job title, company name, salary, and location.
Props:
name: The name of the logged-in user.
email: The email of the logged-in user.
Assets
Contains the images used in the application. Ensure that the images are placed in the assets folder within the project directory.

## ScreenShots
![alt text](<assets/Screenshot 2024-06-19 080719.png>)
![alt text](<assets/Screenshot 2024-06-19 080755.png>)
![alt text](<assets/Screenshot 2024-06-19 080826.png>)