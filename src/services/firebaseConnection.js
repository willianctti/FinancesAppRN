// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJt_PsumoSDDMbfacn63RLqRVJBqxjIAg",
  authDomain: "financesapp-78fad.firebaseapp.com",
  projectId: "financesapp-78fad",
  storageBucket: "financesapp-78fad.appspot.com",
  messagingSenderId: "733566447795",
  appId: "1:733566447795:web:daf9bd7ce157f5a3dbc0c6",
  measurementId: "G-478DXDW39Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;