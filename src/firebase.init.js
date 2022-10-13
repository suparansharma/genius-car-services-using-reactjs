// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFJQlylD07qHnjiWIjnlnH8RAiFKVwSu8",
  authDomain: "genius-car-services-dea63.firebaseapp.com",
  projectId: "genius-car-services-dea63",
  storageBucket: "genius-car-services-dea63.appspot.com",
  messagingSenderId: "485029626872",
  appId: "1:485029626872:web:2ab1c800d3c4d11c1acc0d",
  measurementId: "G-3QSNWKRX8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;