// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF-11mCYjGMTFqgJKD0GwTPS4-TvAdALI",
  authDomain: "trip-connect-68028.firebaseapp.com",
  projectId: "trip-connect-68028",
  storageBucket: "trip-connect-68028.appspot.com",
  messagingSenderId: "655397102361",
  appId: "1:655397102361:web:fbf5ab2bb0f9f23d3a5b88"
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
