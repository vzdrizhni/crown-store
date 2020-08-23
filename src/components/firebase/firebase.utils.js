import firebase, { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDeTZ2irlfxUal5Nw66PswM07Bbd2b4dgg",
    authDomain: "crwn-db-8a44b.firebaseapp.com",
    databaseURL: "https://crwn-db-8a44b.firebaseio.com",
    projectId: "crwn-db-8a44b",
    storageBucket: "crwn-db-8a44b.appspot.com",
    messagingSenderId: "925613677475",
    appId: "1:925613677475:web:498f2c02c7ebb6359ad816",
    measurementId: "G-3B45NKBHRF"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;