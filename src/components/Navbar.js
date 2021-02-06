import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{
  render(){
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
        <span> {this.props.currentUser} </span>
      </nav>
    )
  }
}


export default Navbar
