import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3kU9S1Fu8034dCemVBxXkuOZb_hd9QAo",
  authDomain: "mismascotasaccesorios-1d756.firebaseapp.com",
  projectId: "mismascotasaccesorios-1d756",
  storageBucket: "mismascotasaccesorios-1d756.appspot.com",
  messagingSenderId: "405153900633",
  appId: "1:405153900633:web:96cbe10943acfc87a8e948",
  measurementId: "G-FE2FMK4WDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)