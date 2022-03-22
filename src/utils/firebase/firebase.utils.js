import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqeETSIHk3EZOYv5w1wr-nsTNZdCNemXI",
  authDomain: "crwn-clothing-3bb07.firebaseapp.com",
  projectId: "crwn-clothing-3bb07",
  storageBucket: "crwn-clothing-3bb07.appspot.com",
  messagingSenderId: "514838301793",
  appId: "1:514838301793:web:c5c06e6a2e6727fe6eee20",
  measurementId: "G-MK2G5QM3BE",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshop = await getDoc(userDocRef);
  if (!userSnapshop.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
