import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKqgMdDOpOuivaVL9jzgZd1LdqHkmdJs8",
  authDomain: "chat-6b88a.firebaseapp.com",
  projectId: "chat-6b88a",
  storageBucket: "chat-6b88a.appspot.com",
  messagingSenderId: "422409031326",
  appId: "1:422409031326:web:bb107eb3e3b8d3e2cab58f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();



