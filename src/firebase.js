import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = firebase.initializeApp(
    {
        apiKey: "AIzaSyD2gfLd2v5bIPJrANOBLWQsisGLgb54TLo",
        authDomain: "todolist-887fc.firebaseapp.com",
        databaseURL: "https://todolist-887fc.firebaseio.com",
        projectId: "todolist-887fc",
        storageBucket: "todolist-887fc.appspot.com",
        messagingSenderId: "995494187115",
        appId: "1:995494187115:web:c247d068a3c7a8cb24212e",
        measurementId: "G-843HP4CK61"
    }
);


export { firebaseConfig as firebase };