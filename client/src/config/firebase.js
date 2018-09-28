import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCIIqvrfJGJySmF7YT2QmBSKb7nihhxhYE",
  authDomain: "animedb-625ea.firebaseapp.com",
  databaseURL: "https://animedb-625ea.firebaseio.com",
  projectId: "animedb-625ea",
  storageBucket: "animedb-625ea.appspot.com",
  messagingSenderId: "837121386538"
};
firebase.initializeApp(config);

export default firebase;
