import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var config = {
    apiKey: "AIzaSyBWXsd-nIXJa-wQF8DCp1_Wu1DxYa7SH_U",
    authDomain: "react-fullstack-b1bbd.firebaseapp.com",
    databaseURL: "https://react-fullstack-b1bbd.firebaseio.com",
    projectId: "react-fullstack-b1bbd",
    storageBucket: "react-fullstack-b1bbd.appspot.com",
    messagingSenderId: "491304581877"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;

