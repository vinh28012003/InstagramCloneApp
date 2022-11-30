// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiEpTg5jfmAqxA2PrUQQ3kPakBV8MTCIM",
  authDomain: "instagramclone-c62e0.firebaseapp.com",
  projectId: "instagramclone-c62e0",
  storageBucket: "instagramclone-c62e0.appspot.com",
  messagingSenderId: "713948701128",
  appId: "1:713948701128:web:10f8bbf39f95e06e55e0fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);

export { storage, auth }; 


