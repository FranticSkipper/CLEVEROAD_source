import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXM-NgEcnJL_4-0iG2cFsdUk9Ugen1Ug0",
  authDomain: "clover-59452.firebaseapp.com",
  projectId: "clover-59452",
  storageBucket: "clover-59452.appspot.com",
  messagingSenderId: "759237014817",
  appId: "1:759237014817:web:2a2d1c65fa6bdaec533a60",
  measurementId: "G-J1C763X645"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore()
export const auth = getAuth(app);
