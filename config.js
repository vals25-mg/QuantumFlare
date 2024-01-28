import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCzoOQzpLm0flFz6sjVHlM2eHD_GE54WTE",
    authDomain: "apk-cloud.firebaseapp.com",
    projectId: "apk-cloud",
    storageBucket: "apk-cloud.appspot.com",
    messagingSenderId: "621125922427",
    appId: "1:621125922427:web:cc7cbbe0a3ab2d27243cde",
    measurementId: "G-X4QD46MX5L"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export {firebase}

