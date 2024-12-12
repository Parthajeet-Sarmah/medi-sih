
import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAU_F7rErr-kjG5UWC4xUiQSYmlkbggGS0",
  authDomain: "med-final-1.firebaseapp.com",
  projectId: "med-final-1",
  storageBucket: "med-final-1.firebasestorage.app",
  messagingSenderId: "1059007216477",
  appId: "1:1059007216477:web:9e512452268f915f01c6b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
export const auth: Auth = getAuth(app);  
