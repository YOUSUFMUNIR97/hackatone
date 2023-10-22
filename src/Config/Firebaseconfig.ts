// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOdt2MBqOkbFF8t76_hCEC-eLyRRQenKc",
  authDomain: "hakatone-c5769.firebaseapp.com",
  databaseURL: "https://hakatone-c5769-default-rtdb.firebaseio.com",
  projectId: "hakatone-c5769",
  storageBucket: "hakatone-c5769.appspot.com",
  messagingSenderId: "654387711906",
  appId: "1:654387711906:web:92f64994fe91e27a53acfb",
  measurementId: "G-FNZY37RQ7L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

