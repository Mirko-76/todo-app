import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_WEATHER_API_KEY,
  authDomain: "todoapp-3e2bd.firebaseapp.com",
  databaseURL: "https://todoapp-3e2bd.firebaseio.com",
  projectId: "todoapp-3e2bd",
  // storageBucket: "todoapp-3e2bd.appspot.com",
  // messagingSenderId: "677646755075",
  // appId: "1:677646755075:web:9f4509220612629ec07536",
});

const db = firebaseapp.firestore();

export default db;
