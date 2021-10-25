// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAAVUflpBEf0rgx4ODKl1M3oR9s-PMR-eI",

  authDomain: "instagram-clone-619e4.firebaseapp.com",

  projectId: "instagram-clone-619e4",

  storageBucket: "instagram-clone-619e4.appspot.com",

  messagingSenderId: "168581342170",

  appId: "1:168581342170:web:e1be47f4229887069b56e3"

};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

