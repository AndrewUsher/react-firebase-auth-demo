import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.SNOWPACK_PUBLIC_FIREBASE_APP_ID
})

const firebaseAuth = firebaseApp.auth()

export {
  firebaseApp,
  firebaseAuth
}
