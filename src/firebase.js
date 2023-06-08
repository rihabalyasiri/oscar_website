// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTGzbnske81Ch9KZW8Kseg27zTMaOmBHQ",
  authDomain: "swook-bde27.firebaseapp.com",
  projectId: "swook-bde27",
  storageBucket: "swook-bde27.appspot.com",
  messagingSenderId: "612389955471",
  appId: "1:612389955471:web:5de9f4a365a8564e8ccdfa",
  measurementId: "G-Z1VH4QE0T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);