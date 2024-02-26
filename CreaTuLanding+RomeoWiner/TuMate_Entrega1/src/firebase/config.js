import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from  'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBwmgaMMxJHkTAMCBqcdOF3ueBIqqqKmO0",
    authDomain: "ecommerce-romeowiner.firebaseapp.com",
    projectId: "ecommerce-romeowiner",
    storageBucket: "ecommerce-romeowiner.appspot.com",
    messagingSenderId: "448194568746",
    appId: "1:448194568746:web:226a78c5fec7c10aad1953"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { db, auth }