import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCyjGfBpgmsW7uKf20h-tfvJLMdOqdwQEQ",
    authDomain: "linkedin-clone-1b52c.firebaseapp.com",
    projectId: "linkedin-clone-1b52c",
    storageBucket: "linkedin-clone-1b52c.appspot.com",
    messagingSenderId: "753336938455",
    appId: "1:753336938455:web:c5847eec587b791b236592"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };