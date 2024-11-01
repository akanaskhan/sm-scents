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
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storageDB = getStorage(app);
const storage = getStorage(app)

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is present")
  } else {
      console.log("User not exist")
  }
  
})









const getProductInfo = async (id) => {
  const docRef = doc(db, "products", id);
  const prouductInfo = getDoc(docRef);
  return await prouductInfo;
};

const getProductBids = async (id) => {
  const bidCollectionRef = collection(db, "bids");
  const q = query(bidCollectionRef, where("productId", "==", id));
  return await getDocs(q);
};

const updateBidStatus = async (bidId, status) => {
  const bidCollectionRef = doc(db, "bids", bidId);
  const updated = await updateDoc(bidCollectionRef, { status });
  return updated;
};
const getUserBids = async (userId) => {
  const bidCollectionRef = collection(db, "bids");
  const q = query(bidCollectionRef, where("userId", "==", userId));
  return await getDocs(q);
};

const getUserProducts = async (userId) => {
  const bidCollectionRef = collection(db, "products");
  const q = query(bidCollectionRef, where("createdBy", "==", userId));
  return await getDocs(q);
};



export {
  storage,
  auth,
  db,
  storageDB,
  getProductInfo,
  getUserBids,
  getProductBids,
  updateBidStatus,
  getUserProducts,
}