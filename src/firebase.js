// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMZ617XGJhxx5uk5tYlxHO8VEo7d9Lh8M",
  authDomain: "clone-8321f.firebaseapp.com",
  projectId: "clone-8321f",
  storageBucket: "clone-8321f.appspot.com",
  messagingSenderId: "39616348969",
  appId: "1:39616348969:web:71e2cae00a8a41c087ed38",
  measurementId: "G-E6FNM83WS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);