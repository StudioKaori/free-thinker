import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  //put your apikey infor

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
