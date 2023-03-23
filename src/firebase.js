import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACzHaN2q5xlEifX1AHouQRgzwuQHrgFs8",
    authDomain: "netflix-clone-cc3aa.firebaseapp.com",
    projectId: "netflix-clone-cc3aa",
    storageBucket: "netflix-clone-cc3aa.appspot.com",
    messagingSenderId: "445626940341",
    appId: "1:445626940341:web:9da547874949d3852477fc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth }
export default db;