
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID

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