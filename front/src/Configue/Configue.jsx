import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDW4n3xIZ1iIwmLp5CekoCJBgpUYDghFuw",
  authDomain: "flightlogger-erp-system.firebaseapp.com",
  databaseURL: "https://flightlogger-erp-system.firebaseio.com",
  projectId: "flightlogger-erp-system",
  storageBucket: "flightlogger-erp-system.appspot.com",
  messagingSenderId: "1009739434251",
  appId: "1:1009739434251:web:cd492229dfea4058d17a0e",
  measurementId: "G-BZZ8X1B0D4",
};

export default firebase.initializeApp(firebaseConfig);
