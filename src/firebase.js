import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAniTUmn1yLh8j7kcQPdDsCOXftsbb9kLU",
    authDomain: "react-slack-clone-69a3d.firebaseapp.com",
    databaseURL: "https://react-slack-clone-69a3d.firebaseio.com",
    projectId: "react-slack-clone-69a3d",
    storageBucket: "react-slack-clone-69a3d.appspot.com",
    messagingSenderId: "577381063175",
    appId: "1:577381063175:web:c2f3e6cf2c4f3878"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;