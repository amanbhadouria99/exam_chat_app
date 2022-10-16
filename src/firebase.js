import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDOCYKSHfS31GToiT7EoW2d9E-ye3gFxpA",
    authDomain: "unichat-990d7.firebaseapp.com",
    projectId: "unichat-990d7",
    storageBucket: "unichat-990d7.appspot.com",
    messagingSenderId: "870896411617",
    appId: "1:870896411617:web:f5ecbb10144200722068a0"
  }).auth();