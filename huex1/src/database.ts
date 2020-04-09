import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCmW3sHpncHrrE2rFaKPuhpQ71QtMSOxZI",
  authDomain: "weissbrett-2dcc2.firebaseapp.com",
  databaseURL: "https://weissbrett-2dcc2.firebaseio.com",
  projectId: "weissbrett-2dcc2",
  storageBucket: "weissbrett-2dcc2.appspot.com",
  messagingSenderId: "1055363274858",
  appId: "1:1055363274858:web:354f9118d8f66015979213"
};

export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

