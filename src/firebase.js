import Firebase from "firebase";
import 'firebase/database';
let config = {
  apiKey: "AIzaSyAiXU75VWiPE3LfX6Ufv4EGrFGNf56b6MM",
  authDomain: "apress-book-pwa-5c7ee.firebaseapp.com",
  databaseURL: "https://apress-book-pwa-5c7ee-default-rtdb.firebaseio.com",
  projectId: "apress-book-pwa-5c7ee",
  storageBucket: "apress-book-pwa-5c7ee.appspot.com",
  messagingSenderId: "894843074639",
  appId: "1:894843074639:web:ca15d189c8950bf875523a"
};
export const fireApp  = Firebase.initializeApp(config);
