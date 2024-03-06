// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpT1BgxOcL3XrDhZZXKFimVl3bEauJlG4",
  authDomain: "reservationswebsite-274b6.firebaseapp.com",
  projectId: "reservationswebsite-274b6",
  storageBucket: "reservationswebsite-274b6.appspot.com",
  messagingSenderId: "123058850182",
  appId: "1:123058850182:web:2d76ae5f0fb32dd93dc407",
  measurementId: "G-KCV5YY7M4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);