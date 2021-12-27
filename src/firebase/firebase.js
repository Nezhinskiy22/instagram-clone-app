import "firebase/storage";
import firebase from "firebase/app";
import "firebase/firestore";
require("firebase/auth");

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD7yu88Xi9MqVZsmoDctIzDZJcbGyNkM04",
  authDomain: "instagram-clone-react-d921b.firebaseapp.com",
  projectId: "instagram-clone-react-d921b",
  storageBucket: "instagram-clone-react-d921b.appspot.com",
  messagingSenderId: "847652203965",
  appId: "1:847652203965:web:4bd710f31f71b31fa076d4",
  measurementId: "G-VXMKZ0HYS1",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
