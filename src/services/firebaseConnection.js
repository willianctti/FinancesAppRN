import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
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