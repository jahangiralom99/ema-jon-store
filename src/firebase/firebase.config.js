// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9azKeDC0leTnp3z7y_T50afNm-cvc7-A",
  authDomain: "ema-jon-store.firebaseapp.com",
  projectId: "ema-jon-store",
  storageBucket: "ema-jon-store.appspot.com",
  messagingSenderId: "47721643278",
  appId: "1:47721643278:web:e177c53b87b427e0e6ab5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;