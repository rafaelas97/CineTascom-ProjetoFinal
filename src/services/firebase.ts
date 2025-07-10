import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZNRKzRnet7AeLwiCGGtNg5bZO3oV4VjA",
  authDomain: "cinetascom2025.firebaseapp.com",
  projectId: "cinetascom2025",
  storageBucket: "cinetascom2025.firebasestorage.app",
  messagingSenderId: "669469433697",
  appId: "1:669469433697:web:bddc840403dfbf8b632f20",
  measurementId: "G-QEC4G3KG51"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
