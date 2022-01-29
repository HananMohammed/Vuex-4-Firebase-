import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9Fiu6cCsh6QX1NRika5zHb1Y4P4AIsFc",
    authDomain: "vuex4firebase.firebaseapp.com",
    projectId: "vuex4firebase",
    storageBucket: "vuex4firebase.appspot.com",
    messagingSenderId: "282667351460",
    appId: "1:282667351460:web:b01032c98d677ac3499531",
    measurementId: "G-BG53SLMRQX"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const auth = getAuth()

export { auth }