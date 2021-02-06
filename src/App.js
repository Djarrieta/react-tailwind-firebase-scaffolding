import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'

import {Switch, Route} from 'react-router-dom';

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

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

function App() {

  let currentUser="usuario"
  firebase.auth().onAuthStateChanged((u)=>{
    if(u){
      db.collection("users").doc(u.uid.toString()).get()
      .then(u=>{
        currentUser={...u.data(),uid:u.id}
        
      })
    }else{
      currentUser="null"
      
    }
  })
  return (<div className="h-screen text-gray-500 bg-gray-100">
  <Navbar currentUser={currentUser}/>
  <Switch >
    <Route path="/" exact component={Home}></Route>
    <Route path="/item/:id" exact component={ItemDetail}></Route>
  </Switch>
</div>) 

}


export default App;
export { db,storage};
