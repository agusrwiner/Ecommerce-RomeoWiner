// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwmgaMMxJHkTAMCBqcdOF3ueBIqqqKmO0",
    authDomain: "ecommerce-romeowiner.firebaseapp.com",
    projectId: "ecommerce-romeowiner",
    storageBucket: "ecommerce-romeowiner.appspot.com",
    messagingSenderId: "448194568746",
    appId: "1:448194568746:web:226a78c5fec7c10aad1953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Conect to database
export const db = getFirestore(app);