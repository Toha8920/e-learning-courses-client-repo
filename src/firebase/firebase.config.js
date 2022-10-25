// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDk2hJGX2P4wJBbaBtG1KQMp-47Q1wN9Tw",
    authDomain: "elarning-courses.firebaseapp.com",
    projectId: "elarning-courses",
    storageBucket: "elarning-courses.appspot.com",
    messagingSenderId: "156178165700",
    appId: "1:156178165700:web:fd381b45a97f8d67b9be91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;