import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBkVlfqNiPAxJu5uGC9rjhQreM56FjvHhM",
  authDomain: "react-tailwind-firebase.firebaseapp.com",
  projectId: "react-tailwind-firebase",
  storageBucket: "react-tailwind-firebase.appspot.com",
  messagingSenderId: "605567699112",
  appId: "1:605567699112:web:cc9e339c8cf0943be51a9d"
};

const fire=firebase.initializeApp(firebaseConfig);

export default fire