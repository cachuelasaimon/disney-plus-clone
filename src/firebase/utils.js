import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
/// API Key ///
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

/// Export Firebase Functions ///
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

/// Google Auth API ///
const GoogleAPI = new firebase.auth.GoogleAuthProvider();
GoogleAPI.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(GoogleAPI);

/// Store / Query User Data from Firestore DB ///
export const handleProfile = async ({ userAuth, additionalData }) => {
  if (!userAuth) return;
  // Query user data using userAuth (google sign-in) //
  const { uid, photoURL } = userAuth;
  console.log("/handleProfile");
  const userRef = firestore.doc(`users/${uid}`);
  const user = await userRef.get();

  if (!user.exists) {
    const { email, displayName } = userAuth;
    const timestamp = new Date();
    try {
      userRef.set({
        email,
        displayName,
        photoURL,
        createdAt: timestamp,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
      throw err;
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
