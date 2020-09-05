import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDw9rwOu5QQ7x3YGAeIm_7B7VJKczO9Kq4",
    authDomain: "tik-tok-clone-e739c.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-e739c.firebaseio.com",
    projectId: "tik-tok-clone-e739c",
    storageBucket: "tik-tok-clone-e739c.appspot.com",
    messagingSenderId: "534993705829",
    appId: "1:534993705829:web:79bbaa88cd9713e3c51f8c",
    measurementId: "G-TLMDL5PRBQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;