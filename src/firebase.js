
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_abTZVt529GtJrfcRy4Sp2UhZVOqL0jk",
  authDomain: "hanouty-91a0f.firebaseapp.com",
  projectId: "hanouty-91a0f",
  storageBucket: "hanouty-91a0f.appspot.com",
  messagingSenderId: "52278969620",
  appId: "1:52278969620:web:1c7a668367c58709432e01"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const productsCollection = collection(db, "products")