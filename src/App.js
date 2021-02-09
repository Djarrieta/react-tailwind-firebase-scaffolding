import './App.css';
import { useEffect, useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import fire from "./fire"

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'
import Error404 from "./pages/Error404"


function App() {
  const [currentUser,setCurrentUser]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmation,setConfirmation]=useState("");
  const [problems,setProblems]=useState("");
  const [hasAccount,setHasAccount]=useState(false);
  const [loading,setLoading]=useState(true);
  
  const clearInputs=()=>{
    setEmail("")
    setPassword("")
    setConfirmation("")
  }
  const handleLogin=()=>{
    setLoading(true)
    fire.auth()
    .signInWithEmailAndPassword(email, password)
    .then(()=>{setLoading(false)})
    .catch(e=>{
      console.log(e)
      setProblems(e.code)
      setLoading(false)
    })
  }
  const handleSignUp=()=>{
    setLoading(true)
    fire.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(()=>{setLoading(false)})
    .catch(e=>{
      console.log(e)
      setProblems(e.code)
      setLoading(false)
    })
  }
  const handleSignOut=()=>{
    setLoading(true)
    fire.auth().signOut()
    .then(()=>{setLoading(false)})
    .catch(e=>{
      console.log(e)
      setProblems(e.code)
      setLoading(false)
    });
  }
  const authListener=()=>{
    fire.auth().onAuthStateChanged((currentUser)=>{
      if(currentUser){
        setCurrentUser(currentUser)
      }else{
        setCurrentUser("")
      }
      setLoading(false)
    })
  }
  useEffect(()=>{
    authListener();
  },[])

  if(!loading){
    return(
      <div className="h-screen text-gray-500 bg-gray-100">
        <Navbar 
          currentUser={currentUser}
          handleSignOut={handleSignOut}/>
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmation={confirmation}
          setConfirmation={setConfirmation}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          problems={problems}/>
        <Switch >
          <Route path="/" exact component={Home}></Route>
          <Route path="/item/:id" exact component={ItemDetail}></Route>
          <Route component={Error404}></Route>
        </Switch>
      </div>
    )
  }else{
    return("Cargando")
  }
}

export default App;
