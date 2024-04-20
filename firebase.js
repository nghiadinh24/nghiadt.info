// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8zPolUK4AQpsxmf0axyZ9QEodxHAVf_Y",
  authDomain: "nghiadt-2024.firebaseapp.com",
  projectId: "nghiadt-2024",
  storageBucket: "nghiadt-2024.appspot.com",
  messagingSenderId: "89045484757",
  appId: "1:89045484757:web:b24a0b73cf9a64cebf8e5c",
  measurementId: "G-Q1417KTSY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);