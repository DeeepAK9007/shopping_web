// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA66Zur4bgrD5nZu1-VQStRZV1CjTin21Q",
  authDomain: "it-254-website.firebaseapp.com",
  projectId: "it-254-website",
  storageBucket: "it-254-website.appspot.com",
  messagingSenderId: "780408508320",
  appId: "1:780408508320:web:1f9a896bf19c71c4529ec5",
  measurementId: "G-JF35XSZ0YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db