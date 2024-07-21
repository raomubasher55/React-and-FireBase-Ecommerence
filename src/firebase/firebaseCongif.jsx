// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3Yi30tWupCYu02rKi0G8wqz8Ay1F8Znk",
  authDomain: "myecom-46fe9.firebaseapp.com",
  projectId: "myecom-46fe9",
  storageBucket: "myecom-46fe9.appspot.com",
  messagingSenderId: "252027919464",
  appId: "1:252027919464:web:75032e39651c16faba6fdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB , auth}