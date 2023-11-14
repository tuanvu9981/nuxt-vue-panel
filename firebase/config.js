// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "vuejs-admin-panel-13efd.firebaseapp.com",
  projectId: "vuejs-admin-panel-13efd",
  storageBucket: "vuejs-admin-panel-13efd.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: "1:414984117908:web:5032d11b3719afe5c21e81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);