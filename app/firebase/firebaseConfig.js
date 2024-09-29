// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCUgeLDYIi0kZAMek0ZDVfN3GqCJ3vyZ_U",
  authDomain: "life-plus-72ea7.firebaseapp.com",
  projectId: "life-plus-72ea7",
  storageBucket: "life-plus-72ea7.appspot.com",
  messagingSenderId: "558317622701",
  appId: "1:558317622701:web:80a0d6a3e40f00acefbd24"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
