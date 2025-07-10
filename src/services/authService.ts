import { auth, googleProvider } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";

import type { UserCredential } from "firebase/auth";

export const listenUser = (callback: (user: User | null) => void) => {
  onAuthStateChanged(auth, callback);
};

export const logout = () => signOut(auth);

export const registerWithEmail = (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmail = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = (): Promise<UserCredential> => {
  return signInWithPopup(auth, googleProvider);
};
