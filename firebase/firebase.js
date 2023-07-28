import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIeKv2NX7fYm0PrIvCxuJpksVq3_TkOOA",
  authDomain: "chat-app-d8629.firebaseapp.com",
  projectId: "chat-app-d8629",
  storageBucket: "chat-app-d8629.appspot.com",
  messagingSenderId: "1004698180254",
  appId: "1:1004698180254:web:5df2177278a2f20217b98f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
