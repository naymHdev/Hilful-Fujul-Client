// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyDO56mliYRDoiaHx9SRl9sXK4gr0Xx_Y",
  authDomain: "hilf-al-fudul.firebaseapp.com",
  projectId: "hilf-al-fudul",
  storageBucket: "hilf-al-fudul.appspot.com",
  messagingSenderId: "74251786984",
  appId: "1:74251786984:web:8f05d379a6154c101a475d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
