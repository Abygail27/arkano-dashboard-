import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA5j2VAR7Y_XWjxEg3eIqpPuHDptwGTyfU",
    authDomain: "arkano-dashboard.firebaseapp.com",
    databaseURL: "https://arkano-dashboard.firebaseio.com",
    projectId: "arkano-dashboard",
    storageBucket: "",
    messagingSenderId: "855448696253",
    appId: "1:855448696253:web:a328e9b562f1a344"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase