
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpHbU1q9lGfl5IXbPqjCpfgOwaQV3KRS4",
  authDomain: "e-commerce-coder-82fa6.firebaseapp.com",
  projectId: "e-commerce-coder-82fa6",
  storageBucket: "e-commerce-coder-82fa6.appspot.com",
  messagingSenderId: "1012590943668",
  appId: "1:1012590943668:web:9a16c67d6779565a8966e1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);