// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBpIX3k_rOTnFk6qaYf4FfZLeBN_pxKKQQ",
	authDomain: "banjar-b3c6b.firebaseapp.com",
	projectId: "banjar-b3c6b",
	storageBucket: "banjar-b3c6b.firebasestorage.app",
	messagingSenderId: "668197131643",
	appId: "1:668197131643:web:e823961c246e09e0f9d9de",
	measurementId: "G-FXWX90HPS5"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
