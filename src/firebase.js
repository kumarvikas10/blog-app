import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNzS83Oa1m_eRq9W9p9SrG366u9_Vy_5o",
  authDomain: "blog-app-24857.firebaseapp.com",
  projectId: "blog-app-24857",
  storageBucket: "blog-app-24857.appspot.com",
  messagingSenderId: "818932257924",
  appId: "1:818932257924:web:56e102a894441703731ed1"
};

const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
export const db = getFirestore(app);