import {initializeApp} from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCEPoK4-qN9qimA6-JNFXjk1RwPm8iMChw",
  authDomain: "ucalgaryjapanese.firebaseapp.com",
  projectId: "ucalgaryjapanese",
  storageBucket: "ucalgaryjapanese.firebasestorage.app",
  messagingSenderId: "844892353936",
  appId: "1:844892353936:web:d7e920a58c5acce38fef15",
  measurementId: "G-GKRDFL6ZM0"
};

const app = initializeApp(firebaseConfig);

// Analytics only works in browser
let analytics = null;

export async function getAnalyticsInstance() {
  if (!analytics && await isSupported()) {
    analytics = getAnalytics(app);
    
  }
  return analytics;
}

export default app;