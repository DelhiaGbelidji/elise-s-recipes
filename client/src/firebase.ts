// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "elise-s-recipes.firebaseapp.com",
  projectId: "elise-s-recipes",
  storageBucket: "elise-s-recipes.appspot.com",
  messagingSenderId: "262826884648",
  appId: "1:262826884648:web:e63657f48543a37b4b3f1d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
