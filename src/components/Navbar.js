import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =(props)=>{
  const {currentUser, handleSignOut}=props
  return (
    <nav className="container flex items-center justify-around h-16 m-auto bg-gray-100 ">
      <div className="flex items-center cursor-pointer">
        <svg 
          onClick={()=>(console.log("hola"))}
          className="w-12 h-12" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        <Link to='/'>Logo</Link>
      </div>
      <div>Buscar</div>
      <div className="flex flex-col">
        <button onClick={()=>handleSignOut()} >Salir</button>
        <span> {currentUser.uid} </span>
      </div>
      
    </nav>
  )

}

export default Navbar
