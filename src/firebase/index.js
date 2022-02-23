import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi0KOGYgj-VNg5hywOuwrqT0BmC9CVZ5c",
  authDomain: "blog-page-b3db3.firebaseapp.com",
  projectId: "blog-page-b3db3",
  storageBucket: "blog-page-b3db3.appspot.com",
  messagingSenderId: "359050165977",
  appId: "1:359050165977:web:19b8aeb6b3a5d6c5ad08c8",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
