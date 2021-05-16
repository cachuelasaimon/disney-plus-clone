import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import { firebaseConfig } from "./config";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

/// Export Firebase Utils
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

/// Google API
const GoogleAPI = new firebase.auth.GoogleAuthProvider();
GoogleAPI.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleAPI);

/// Query / Store User Data
export const handleProfile = async ({ userAuth, additionalData }) => {
  if (!userAuth) {
    return;
  }
  console.log("/utils/handleProfile");
  // get uid from userAuth
  const { uid } = userAuth;
  const userRef = firestore.doc(`users/${uid}`);
  const user = await userRef.get();
  if (!user.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt: timestamp,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsub = auth.onAuthStateChanged((userAuth) => {
      unsub();
      resolve(userAuth);
    }, reject);
  });
};
