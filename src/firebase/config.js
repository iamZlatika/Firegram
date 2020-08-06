import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDV7HC6kKJS23hEmSw46PPNRTefOj8WOFo",
  authDomain: "firegram-82199.firebaseapp.com",
  databaseURL: "https://firegram-82199.firebaseio.com",
  projectId: "firegram-82199",
  storageBucket: "firegram-82199.appspot.com",
  messagingSenderId: "413340000368",
  appId: "1:413340000368:web:3493daad22996f1f5d14b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp}