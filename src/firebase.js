import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuIum2IN7pppeJnSBj8KVVNNocZMeEbMA",
  authDomain: "nwitter-105e8.firebaseapp.com",
  databaseURL: "https://nwitter-105e8.firebaseio.com",
  projectId: "nwitter-105e8",
  storageBucket: "nwitter-105e8.appspot.com",
  messagingSenderId: "387607215307",
  appId: "1:387607215307:web:2f4e5b2528b9bad1e3af4e",
};

export default firebase.initializeApp(firebaseConfig);
