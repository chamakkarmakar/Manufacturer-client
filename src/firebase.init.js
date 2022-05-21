
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfwbgrQKW1cru8ZY9PLqIQWYQJhVP8A-A",
  authDomain: "manufacturer-site.firebaseapp.com",
  projectId: "manufacturer-site",
  storageBucket: "manufacturer-site.appspot.com",
  messagingSenderId: "388734224824",
  appId: "1:388734224824:web:cf23edf29a5b152177e74d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;