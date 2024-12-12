// src/authService.ts
import { auth, db } from "../firebase/firebase";
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";

export interface UserInfo {
  email: string;
  password: string;
  additionalInfo?: Record<string, unknown>;
}

export const signUp = async (userInfo: UserInfo): Promise<User> => {
  const { email, password, additionalInfo } = userInfo;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user: User = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email,
      ...additionalInfo,
    });

    return user;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(errorMessage);
  }
};

export const login = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(errorMessage);
  }
};

export const getUserInfo = async (email: string): Promise<Record<string, unknown> | undefined> => {
  try {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", email));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Return the first matching document's data
      const userDoc = querySnapshot.docs[0];
      return userDoc.data();
    } else {
      throw new Error("No user data found for the given email.");
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(errorMessage);
  }
};



