// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from"firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgkDtlILW9DCwqhbxtJA1QfPGxNy1eIdY",
  authDomain: "car-hat.firebaseapp.com",
  projectId: "car-hat",
  storageBucket: "car-hat.appspot.com",
  messagingSenderId: "30060152625",
  appId: "1:30060152625:web:7abf87a4a1803487819210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;