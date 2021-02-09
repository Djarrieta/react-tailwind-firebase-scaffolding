import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar =(props)=>{
  const {currentUser, handleSignOut}=props
  const [principalMenu,setPrincipalMenu]=useState(false)
  
  return (
    <nav className="container flex items-center justify-around h-16 m-auto bg-gray-100 ">
      <div className="relative flex items-center cursor-pointer">
        <svg 
          onClick={()=>setPrincipalMenu(!principalMenu)}
          className="w-12 h-12" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        <Link to='/'>Logo</Link>
        {/* Principal Menu */}
        {principalMenu && 
          <div className="absolute top-0 left-0 flex flex-col w-64 h-64 mt-16 bg-green-500">
            <Link className="w-full px-2 py-1 text-center" to="/login">Login</Link>
            <Link className="w-full px-2 py-1 text-center" to="/about">About</Link>
          </div>}
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
