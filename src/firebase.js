// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD58ArA3aTAgHP_ge0BguP6Wo5JSOQBvuY",
  authDomain: "myntra-6f4a4.firebaseapp.com",
  projectId: "myntra-6f4a4",
  storageBucket: "myntra-6f4a4.appspot.com",
  messagingSenderId: "449749137749",
  appId: "1:449749137749:web:f74297d7ccdcf0144cd7dc",
  measurementId: "G-L6Q6TKT2DG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
