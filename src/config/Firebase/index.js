import firebase from "firebase";

firebase.initializeApp({
  apiKey: 'AIzaSyDxXb0NKGVIyMY2xy3RlBooQr66P8qQhoU',
  authDomain: 'my-doctor-6de4c.firebaseapp.com',
  databaseURL: "https://my-doctor-6de4c-default-rtdb.firebaseio.com",
  projectId: 'my-doctor-6de4c',
  storageBucket: 'my-doctor-6de4c.appspot.com',
  messagingSenderId: '308507027174',
  appId: '1:308507027174:web:7c8b46bed66cad6d5dfd27',
});

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
