// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTLa_f2o2MaSVnXRNlj61MoyibD1R6JQ4",
  authDomain: "sm-scents-web.firebaseapp.com",
  projectId: "sm-scents-web",
  storageBucket: "sm-scents-web.appspot.com",
  messagingSenderId: "132036245057",
  appId: "1:132036245057:web:f3f5e8ef30f6a2562c78c0",
  measurementId: "G-KT10HEMBNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storageDB = getStorage(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user", user)
  } else {
      console.log("User not exist")
  }
})

export {
  auth,
  db,
  storageDB,
}