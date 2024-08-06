import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsIZ02eqFjqwgxAGq7GDov6FP2YIW5EAk",
  authDomain: "medium-app-e5be3.firebaseapp.com",
  projectId: "medium-app-e5be3",
  storageBucket: "medium-app-e5be3.appspot.com",
  messagingSenderId: "943920826040",
  appId: "1:943920826040:web:7ad9c8879bdc1f592a564d",
  measurementId: "G-9GS4LQZ47X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
