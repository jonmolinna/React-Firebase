import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyByvExujZiLePDEi_P83U9jCuc-mH5-1x0",
    authDomain: "instagram-clone-react-e4f57.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-e4f57.firebaseio.com",
    projectId: "instagram-clone-react-e4f57",
    storageBucket: "instagram-clone-react-e4f57.appspot.com",
    messagingSenderId: "277267198752",
    appId: "1:277267198752:web:1a8287439600f792231d45",
    measurementId: "G-1L790CRG6P"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };