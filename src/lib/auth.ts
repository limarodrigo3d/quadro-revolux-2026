import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// CRIAR USUÁRIO
export async function registerUser(email: string, password: string, name: string) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", userCred.user.uid), {
    name,
    email,
    role: "editor", // padrão
  });

  return userCred.user;
}

// LOGIN
export async function loginUser(email: string, password: string) {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred.user;
}

// LOGOUT
export async function logoutUser() {
  await signOut(auth);
}

// PEGAR ROLE
export async function getUserRole(uid: string) {
  const docRef = doc(db, "users", uid);
  const snap = await getDoc(docRef);

  if (!snap.exists()) return null;
  return snap.data().role;
}