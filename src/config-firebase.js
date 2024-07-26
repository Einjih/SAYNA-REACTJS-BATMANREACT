// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTHDOMAIN,
  projectId: "einjih-9a593",
  storageBucket: "einjih-9a593.appspot.com",
  messagingSenderId: "377425634761",
  appId: "1:377425634761:web:663f6a3fb57eaffb2f7418",
  measurementId: "G-KH32NXPDJP"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//export const auth = app.auth();
export const auth = getAuth(app);
export default app;