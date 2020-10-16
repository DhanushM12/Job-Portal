import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCHBDkXucivzdrFadPlRXkt14CWDLUvczY",
  authDomain: "job-portal-9096b.firebaseapp.com",
  databaseURL: "https://job-portal-9096b.firebaseio.com",
  projectId: "job-portal-9096b",
  storageBucket: "job-portal-9096b.appspot.com",
  messagingSenderId: "1017244594937",
  appId: "1:1017244594937:web:cc0334d7ca839badf2a828",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
