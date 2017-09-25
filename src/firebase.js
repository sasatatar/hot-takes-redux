import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBOyr-ndwWrytSyyJNfe-UI0gep8WhgV1M",
  authDomain: "hot-takes-2338a.firebaseapp.com",
  databaseURL: "https://hot-takes-2338a.firebaseio.com",
  projectId: "hot-takes-2338a",
  storageBucket: "hot-takes-2338a.appspot.com",
  messagingSenderId: "9113560273"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
