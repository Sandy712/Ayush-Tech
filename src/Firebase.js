import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAQFVlAG_Bjwkkw-DevfHNmyV6rkSvXu7s",
    authDomain: "ayush-tech-1c048.firebaseapp.com",
    projectId: "ayush-tech-1c048",
    storageBucket: "ayush-tech-1c048.appspot.com",
    messagingSenderId: "1007383884824",
    appId: "1:1007383884824:web:1b50e552f2e16cbb3a7f6d",
    measurementId: "G-DK9PKZHYMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { app, storage,firestore};