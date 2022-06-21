// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPPxUlGZei_QvIUheQr3QRJqb7Fetxc7E",
  authDomain: "portfolio-e61f3.firebaseapp.com",
  projectId: "portfolio-e61f3",
  storageBucket: "portfolio-e61f3.appspot.com",
  messagingSenderId: "554953121450",
  appId: "1:554953121450:web:c4da3e65075888bde4fad3",
  measurementId: "G-FPRVPDS390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);