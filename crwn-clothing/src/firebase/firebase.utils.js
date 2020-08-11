import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDmCEIxx8vsFJzOpmOSxosvr4MJjECJHLA',
  authDomain: 'crwn-db-a8181.firebaseapp.com',
  databaseURL: 'https://crwn-db-a8181.firebaseio.com',
  projectId: 'crwn-db-a8181',
  storageBucket: 'crwn-db-a8181.appspot.com',
  messagingSenderId: '5175079138',
  appId: '1:5175079138:web:714c708e2072c14fe1aebb',
  measurementId: 'G-QK3Q4LQ9T8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
