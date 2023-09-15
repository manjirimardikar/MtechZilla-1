
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCpovuYr5yraD6HaFO7eTUuSJBYMedg5Lo",
  authDomain: "timerapp-7d7e4.firebaseapp.com",
  projectId: "timerapp-7d7e4",
  storageBucket: "timerapp-7d7e4.appspot.com",
  messagingSenderId: "1012089035116",
  appId: "1:1012089035116:web:7ad2dd9254e0704ca27b49",
  measurementId: "G-JLE7H76YP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};