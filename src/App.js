import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route,Redirect} from 'react-router-dom';
import fire from "./fire"

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home'
import ItemDetail from './pages/ItemDetail'
import Error404 from "./pages/Error404"
import About from "./pages/About"


function App() {
  const [currentUser,setCurrentUser]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmation,setConfirmation]=useState("");
  const [problems,setProblems]=useState("");
  const [hasAccount,setHasAccount]=useState(true);
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
      <BrowserRouter>
        <div className="h-screen overflow-x-hidden overflow-y-scroll text-gray-500 bg-gray-100 ">
          <Navbar 
            currentUser={currentUser}
            handleSignOut={handleSignOut}/>
            <Switch >
              <Route path="/" exact component={Home}/>
              <Route path="/login" exact>
                {!currentUser ? <Login 
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
                  problems={problems}/> : <Redirect to="/"/>}
              </Route>
              <Route path="/about" exact>
                {currentUser ? <About/> : <Redirect to="/"/>} 
              </Route>
              <Route path="/item/:id" exact component={ItemDetail}></Route>
              <Route component={Error404}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }else{
    return("Cargando")
  }
}
export default App;
