// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuHgFi-_Vg4h26mUSiB2-W-PZiws8a52k",
  authDomain: "cardealer-coder-react.firebaseapp.com",
  projectId: "cardealer-coder-react",
  storageBucket: "cardealer-coder-react.appspot.com",
  messagingSenderId: "94100897027",
  appId: "1:94100897027:web:27fb33d9172f562f7b3d36",
  measurementId: "G-1737GZ3NDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);