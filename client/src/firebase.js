// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-c6237.firebaseapp.com",
  projectId: "blog-c6237",
  storageBucket: "blog-c6237.appspot.com",
  messagingSenderId: "276968466651",
  appId: "1:276968466651:web:6438e91a8e1495fda244fe",
  measurementId: "G-0VTJG7JEEG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);