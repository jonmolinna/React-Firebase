import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCC3UmOc0FGYXXSXwXhk5oMJ4tmDp4cfZc",
    authDomain: "whatsapp-clone-7336e.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-7336e.firebaseio.com",
    projectId: "whatsapp-clone-7336e",
    storageBucket: "whatsapp-clone-7336e.appspot.com",
    messagingSenderId: "148083985186",
    appId: "1:148083985186:web:bbf263d1a8bd68da30737b",
    measurementId: "G-9Q4NM2HYC3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;