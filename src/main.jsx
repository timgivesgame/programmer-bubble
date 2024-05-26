import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVbYKW3tudpEaS2EIUTqowEiyewKl9zQM",
  authDomain: "programmerbubble-424508.firebaseapp.com",
  projectId: "programmerbubble-424508",
  storageBucket: "programmerbubble-424508.appspot.com",
  messagingSenderId: "459741616357",
  appId: "1:459741616357:web:17dfd887d2a03e2b4a1c0c",
  measurementId: "G-B2P5V3WWS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
