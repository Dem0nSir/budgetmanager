// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBVEhB6AUKbTFJJAME5x-IKLGQIhbFyrs",
  authDomain: "budgetmanager-571a3.firebaseapp.com",
  projectId: "budgetmanager-571a3",
  storageBucket: "budgetmanager-571a3.appspot.com",
  messagingSenderId: "464889825255",
  appId: "1:464889825255:web:6c613110e305ecb1911f42",
  measurementId: "G-YKT8KTRD34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);