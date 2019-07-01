import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA5j2VAR7Y_XWjxEg3eIqpPuHDptwGTyfU",
    authDomain: "arkano-dashboard.firebaseapp.com",
    databaseURL: "https://arkano-dashboard.firebaseio.com",
    projectId: "arkano-dashboard",
    storageBucket: "",
    messagingSenderId: "855448696253",
    appId: "1:855448696253:web:a328e9b562f1a344"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let firestore

firebase.firestore().enablePersistence()
  .then(function () {
    // Initialize Cloud Firestore through firebase
    firestore = firebase.firestore()
  })
  .catch(function (err) {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  })

export default fire
export { firestore }