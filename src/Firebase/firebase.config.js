// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyya5oWacZGHNvWVVS5ReZa3PhF_0F2S8",
  authDomain: "ph-milestone-11.firebaseapp.com",
  projectId: "ph-milestone-11",
  storageBucket: "ph-milestone-11.firebasestorage.app",
  messagingSenderId: "391132686202",
  appId: "1:391132686202:web:41865aef5693250b0118c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
