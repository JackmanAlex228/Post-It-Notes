import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for other Firebase products

// Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBC_JwBmErbisRIje2MmxoW0jtOdbO4PdI",
	authDomain: "post-it-notes-d7030.firebaseapp.com",
	projectId: "post-it-notes-d7030",
	storageBucket: "post-it-notes-d7030.appspot.com",
	messagingSenderId: "639484237355",
	appId: "1:639484237355:web:97bc217fcc56c438c8bc6e",
	measurementId: "G-GSWFM7Q35M"
};

// Initialize Firebase;
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app);