// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7EtMZWnciCP5alzE5KDgTqqYWfY_SGHE",
  authDomain: "blog-post-project-bd57f.firebaseapp.com",
  projectId: "blog-post-project-bd57f",
  storageBucket: "blog-post-project-bd57f.appspot.com",
  messagingSenderId: "543344119473",
  appId: "1:543344119473:web:1731c1c7d5c6ae5f941c90",
  measurementId: "G-NWHTEP4F7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);


