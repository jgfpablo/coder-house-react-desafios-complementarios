import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQcFOcijYV_d22DWoz4QJeA4kk5ZgV1-8",
    authDomain: "bd-react-coffee.firebaseapp.com",
    projectId: "bd-react-coffee",
    storageBucket: "bd-react-coffee.appspot.com",
    messagingSenderId: "523378785355",
    appId: "1:523378785355:web:b87c78ac504ff3cef361ce",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
