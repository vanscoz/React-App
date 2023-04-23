import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP1t4iZT94YiRTmto8UYKd2lLgqLzkR0A",
  authDomain: "projetoead-ab3b9.firebaseapp.com",
  projectId: "projetoead-ab3b9",
  storageBucket: "projetoead-ab3b9.appspot.com",
  messagingSenderId: "373916518546",
  appId: "1:373916518546:web:21d81b16370053c1cd3e4b"
};


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)

  }

  export default firebase