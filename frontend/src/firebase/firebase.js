import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCVpGp46CRTWLDCsKDpPHn0wNoIaheKTLg",
  authDomain: "free-thinker-d732f.firebaseapp.com",
  databaseURL: "https://free-thinker-d732f.firebaseio.com",
  projectId: "free-thinker-d732f",
  storageBucket: "free-thinker-d732f.appspot.com",
  messagingSenderId: "334017849826",
  appId: "1:334017849826:web:2c57956e80724f79d771bb",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
