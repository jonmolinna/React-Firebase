import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJrj0-3ClV6IRjT8YD2u2BfWXbD90oBvY",
    authDomain: "facebook-clone-c8b07.firebaseapp.com",
    databaseURL: "https://facebook-clone-c8b07.firebaseio.com",
    projectId: "facebook-clone-c8b07",
    storageBucket: "facebook-clone-c8b07.appspot.com",
    messagingSenderId: "699944279075",
    appId: "1:699944279075:web:77ee67ec700c5f492f2596",
    measurementId: "G-53F6099LKC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;