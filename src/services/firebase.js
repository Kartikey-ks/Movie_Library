// Import Firebase core and services
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "movie-lib-f6ac5.firebaseapp.com",
  projectId: "movie-lib-f6ac5",
  storageBucket: "movie-lib-f6ac5.appspot.com",
  messagingSenderId: "719995165909",
  appId: "1:719995165909:web:dd4edbe9a059793342165c"
};

// Initialize app and export auth/db
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);