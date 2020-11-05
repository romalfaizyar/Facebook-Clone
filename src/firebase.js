// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJTodXCHYdh2vAeQmEUGJVMHRwqkhQxNA",
  authDomain: "facebook-clone-2b80d.firebaseapp.com",
  databaseURL: "https://facebook-clone-2b80d.firebaseio.com",
  projectId: "facebook-clone-2b80d",
  storageBucket: "facebook-clone-2b80d.appspot.com",
  messagingSenderId: "482564610306",
  appId: "1:482564610306:web:2c3b25051ac284cba8ca1b",
  measurementId: "G-534FJHLPTR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;