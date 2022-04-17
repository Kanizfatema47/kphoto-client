// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRoy_yVD6cllftUJEUxDmauDfEQXpgjAg",
  authDomain: "photography-8cd93.firebaseapp.com",
  projectId: "photography-8cd93",
  storageBucket: "photography-8cd93.appspot.com",
  messagingSenderId: "233580462218",
  appId: "1:233580462218:web:aaca9af4703a94818e6d73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth