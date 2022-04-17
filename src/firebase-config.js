import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmlc-UKHHxGN5fZ4tpCFLpdg_qP5LC464",
  authDomain: "newpro-4e4da.firebaseapp.com",
  databaseURL: "https://newpro-4e4da-default-rtdb.firebaseio.com",
  projectId: "newpro-4e4da",
  storageBucket: "newpro-4e4da.appspot.com",
  messagingSenderId: "475025732849",
  appId: "1:475025732849:web:0041986f4cd5a88603e550"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

