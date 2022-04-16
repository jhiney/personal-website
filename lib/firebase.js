import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDYV2-PTPlFcZ9W1dxh-BNHdTd5UXeqLzE",
  authDomain: "jhiney-dev.firebaseapp.com",
  projectId: "jhiney-dev",
  storageBucket: "jhiney-dev.appspot.com",
  messagingSenderId: "35576359572",
  appId: "1:35576359572:web:2cd4bd985020dda10a6281"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();