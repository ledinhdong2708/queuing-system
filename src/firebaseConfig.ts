import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCcDCNSAB80cZ5Ve1WTJeWE5Xo2AckCm3s',
  authDomain: 'reactjs-d2631.firebaseapp.com',
  projectId: 'reactjs-d2631',
  storageBucket: 'reactjs-d2631.appspot.com',
  messagingSenderId: '1044936663614',
  appId: '1:1044936663614:web:5f4c3df757ed7c4661676f',
  measurementId: 'G-2TQ9CNH4KH'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
