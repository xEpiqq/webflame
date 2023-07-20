import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBEKb7vMTi_nk7rhqAGsYdW0Rr-_HN6yU",
  authDomain: "webflame-56c04.firebaseapp.com",
  projectId: "webflame-56c04",
  storageBucket: "webflame-56c04.appspot.com",
  messagingSenderId: "585720995310",
  appId: "1:585720995310:web:a805f7f86d978ed2dfc2ff",
  measurementId: "G-H1F661WWQE"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();