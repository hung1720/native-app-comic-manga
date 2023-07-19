import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCNd_8bpwLcjQ5fnUVEJVe8edENc8T8c-I",
    authDomain: "authenreactnative.firebaseapp.com",
    projectId: "authenreactnative",
    storageBucket: "authenreactnative.appspot.com",
    messagingSenderId: "1034597033486",
    appId: "1:1034597033486:web:be696586b916060a89be5f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export { auth, db, firebase}