// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCFUkHj-ZCTYnTYrOB-oc2lAUF-YqHv4nE",
    authDomain: "tinder-clone-54e3f.firebaseapp.com",
    projectId: "tinder-clone-54e3f",
    storageBucket: "tinder-clone-54e3f.appspot.com",
    messagingSenderId: "325335099387",
    appId: "1:325335099387:web:278dc514e047eecd76cd5e",
    measurementId: "G-2J3GB2J57J"
  };

  const firebaseapp =firebase.initializeApp(firebaseConfig);

  const database= firebaseapp.firestore();
  export default database;