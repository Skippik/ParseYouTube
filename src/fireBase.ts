// import {initializeApp} from 'firebase/app';
// import {getDatabase} from 'firebase/database';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';

//
const fireBaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUSKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

firebase.initializeApp(fireBaseConfig);

export default firebase;
