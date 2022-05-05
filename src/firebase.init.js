// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSH-tx8iEyAKAdgW-5IyuIL_CtsEVNGTM",
  authDomain: "inventory-management-b4678.firebaseapp.com",
  projectId: "inventory-management-b4678",
  storageBucket: "inventory-management-b4678.appspot.com",
  messagingSenderId: "919913980293",
  appId: "1:919913980293:web:294c0f5fd6f0ad60fe64ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
