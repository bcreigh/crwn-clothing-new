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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
