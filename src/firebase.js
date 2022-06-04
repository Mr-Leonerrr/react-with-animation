// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCsy30NIShqFc0BZKeH5V7fts7IY_BQvno",
	authDomain: "react-with-animation-21fab.firebaseapp.com",
	projectId: "react-with-animation-21fab",
	storageBucket: "react-with-animation-21fab.appspot.com",
	messagingSenderId: "495184244281",
	appId: "1:495184244281:web:0dd4d2bdeb8ef5781ca7e8"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };