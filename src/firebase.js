import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBIv8MIuZBSAUPjKawaxWHO5LMUXWNFKNg",
    authDomain: "storage-drive-98a97.firebaseapp.com",
    projectId: "storage-drive-98a97",
    storageBucket: "storage-drive-98a97.appspot.com",
    messagingSenderId: "208003694323",
    appId: "1:208003694323:web:4026e5764ad8e58de94186"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }