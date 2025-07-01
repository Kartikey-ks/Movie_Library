// ✅ Step 1: Import Firebase core and services
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Step 2: Firebase config — hide API key using Vite env variable
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, // ✅ Moved to .env
  authDomain: "movie-lib-f6ac5.firebaseapp.com",
  projectId: "movie-lib-f6ac5",
  storageBucket: "movie-lib-f6ac5.appspot.com", // ✅ Fixed typo (.app → .com)
  messagingSenderId: "719995165909",
  appId: "1:719995165909:web:dd4edbe9a059793342165c"
};

// ✅ Step 3: Initialize app and export auth/db
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // (optional for saving favourites)
