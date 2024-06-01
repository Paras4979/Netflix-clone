// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8y76MQUW5FdHWMkHaChHyHFf0Rc7XIUY",
  authDomain: "react-netflix-clone-a3bd7.firebaseapp.com",
  projectId: "react-netflix-clone-a3bd7",
  storageBucket: "react-netflix-clone-a3bd7.appspot.com",
  messagingSenderId: "635920865337",
  appId: "1:635920865337:web:1f479f88f908f4bcc7d5e8",
  measurementId: "G-E0JME46LDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);