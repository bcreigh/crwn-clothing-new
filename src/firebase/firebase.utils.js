import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCASKxAjACCmJibbTuHj--8mrsPQlCbHcc",
  authDomain: "crwn-db-bcreigh.firebaseapp.com",
  databaseURL: "https://crwn-db-bcreigh.firebaseio.com",
  projectId: "crwn-db-bcreigh",
  storageBucket: "crwn-db-bcreigh.appspot.com",
  messagingSenderId: "845278129914",
  appId: "1:845278129914:web:706ce4630533b365b2e343",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
