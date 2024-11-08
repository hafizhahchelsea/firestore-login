// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmAh9viyUj8sGFG0MgJFUDNcEYh-6Cnoo",
  authDomain: "firestore-db-cc5ca.firebaseapp.com",
  projectId: "firestore-db-cc5ca",
  storageBucket: "firestore-db-cc5ca.firebasestorage.app",
  messagingSenderId: "1034806671318",
  appId: "1:1034806671318:web:31cab79233c108c8235677",
  measurementId: "G-CFW60QTWGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);