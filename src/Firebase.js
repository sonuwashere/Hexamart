import { initializeApp } from "firebase/app";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBVnp1hYBKg9dIRAfPikXEwG7PYLcqtlo",
  authDomain: "hexacore--clone.firebaseapp.com",
  projectId: "hexacore--clone",
  storageBucket: "hexacore--clone.appspot.com",
  messagingSenderId: "466935859783",
  appId: "1:466935859783:web:bfde42e297c39b8059ff62",
  measurementId: "G-GM6Y257VKM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

