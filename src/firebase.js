// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjnbBmBwdLcH7R5ufZDJPQe8h4epSLQjE",
  authDomain: "frimp-vid.firebaseapp.com",
  projectId: "frimp-vid",
  storageBucket: "frimp-vid.appspot.com",
  messagingSenderId: "803482455648",
  appId: "1:803482455648:web:557ac7fe6f048104ff3d05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const db=getFirestore(app)