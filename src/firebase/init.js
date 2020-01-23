import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "AIzaSyAR811O_O7sbIMuzMimSWvRJ2k5YjvgsVY",
  authDomain: "test2-c3a0f.firebaseapp.com",
  databaseURL: "https://test2-c3a0f.firebaseio.com",
  projectId: "test2-c3a0f",
  storageBucket: "test2-c3a0f.appspot.com",
  messagingSenderId: "843623779328",
  appId: "1:843623779328:web:d33533cc29a770c5e65ce5"
}

firebase.initializeApp(config)
