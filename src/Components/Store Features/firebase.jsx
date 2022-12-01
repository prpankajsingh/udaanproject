import firebase from "firebase";
import "firebase/storage";
import "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCP2zWvpmnIbCLYDM2xf09gVIFHCUv-sGs",
  authDomain: "project-udaan-iitb.firebaseapp.com",
  projectId: "project-udaan-iitb",
  storageBucket: "project-udaan-iitb.appspot.com",
  messagingSenderId: "773889024336",
  appId: "1:773889024336:web:9a3a674dcf4513dd23cc55",
  measurementId: "${config.measurementId}",
};
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

export { auth, storage, db, analytics };
