import * as firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBDWn9OmdRan77J89BHddwEDYY9ptl6H9Q",
    authDomain: "react-practice-37fdd.firebaseapp.com",
    databaseURL: "https://react-practice-37fdd.firebaseio.com",
    projectId: "react-practice-37fdd",
    storageBucket: "react-practice-37fdd.appspot.com",
    messagingSenderId: "588078679207"
  };
  firebase.initializeApp(config);


  export const database=firebase.database().ref('/mydetail')
  export const auth = firebase.auth();
  export const googleProvider= new firebase.auth.GoogleAuthProvider();
  