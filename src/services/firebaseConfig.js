// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFuMh_OAN-lRxTPCo-5yxXQleprK93ufs",
  authDomain: "tortas-tienda.firebaseapp.com",
  projectId: "tortas-tienda",
  storageBucket: "tortas-tienda.appspot.com",
  messagingSenderId: "753977020548",
  appId: "1:753977020548:web:c5bcc59725faa26879f2d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProds = collection(db, "products");
