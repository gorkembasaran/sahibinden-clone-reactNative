import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBb1B4V0O3vt3RRlBZAlzNNSi8eeLUGpHE",
  authDomain: "sahibinden-8741c.firebaseapp.com",
  databaseURL: "https://sahibinden-8741c-default-rtdb.firebaseio.com",
  projectId: "sahibinden-8741c",
  storageBucket: "sahibinden-8741c.appspot.com",
  messagingSenderId: "422972702903",
  appId: "1:422972702903:web:2aa99d885799f59d568d32",
  measurementId: "G-Y9M3C9284V"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { db, auth };