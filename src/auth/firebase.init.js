// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjz9Ke7tQBAMFVka54foH1zggksCVKnZ8",
  authDomain: "dental-cear.firebaseapp.com",
  projectId: "dental-cear",
  storageBucket: "dental-cear.firebasestorage.app",
  messagingSenderId: "429802853748",
  appId: "1:429802853748:web:1c6f467a4f11298ef94821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);