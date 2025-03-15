import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCf9_eIsdllq3r6SEU_daF27jwHE7ONoQA",
  authDomain: "fir-e5a13.firebaseapp.com",
  projectId: "fir-e5a13",
  storageBucket: "fir-e5a13.firebasestorage.app",
  messagingSenderId: "306342761753",
  appId: "1:306342761753:web:ce1bae069481a815136188",
  // measurementId: "G-MY2VK10YQD",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
