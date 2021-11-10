import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const firebaseInitializing  = () => {
    initializeApp(firebaseConfig);
}

export default firebaseInitializing
    
