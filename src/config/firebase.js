// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOh-tsCE2DNCQIclg9K8FDNkrK6bTVvLE",
  authDomain: "food-delivery-92c1d.firebaseapp.com",
  projectId: "food-delivery-92c1d",
  storageBucket: "food-delivery-92c1d.firebasestorage.app",
  messagingSenderId: "184854899066",
  appId: "1:184854899066:web:35b1a6ded59fad11798ec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const firestore = getFirestore();