// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCkHtWL-ML-fzRfi-wYZjmq94rd5hzRvF8",
  authDomain: "web-security-18145.firebaseapp.com",
  projectId: "web-security-18145",
  storageBucket: "web-security-18145.appspot.com",
  messagingSenderId: "311703539224",
  appId: "1:311703539224:web:713f15e775faf852e1fd6d"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseDB   = getFirestore( FirebaseApp );