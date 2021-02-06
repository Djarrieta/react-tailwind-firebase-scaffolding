import React from 'react'
import { db } from '../App'
import firebase from "firebase/app"
import { Link } from 'react-router-dom'

class Home extends React.Component{
  state={
    loading:true,
    nombre:"",
    email:"",
    vector:[{nombre:"",email:"",id:""}]
  }
  componentDidMount(){
    this.setState({
      ...this.state,
      loading:true
    })
    db.collection("items")
    .orderBy("nombre","asc")
    .onSnapshot((items)=>{
      let results=[]
      items.forEach(item=>{
        results.push({...item.data(),id:item.id})})
      this.setState({
        ...this.state,
        vector:results,
        loading:false
      })
    })
  }

  //Reactividad al estado con los inputs, se logra con la propidad name y value del input
  handleChange=e=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  //Métodos 
  saveData(nombre,email){
    db.collection("items").doc().set({
      nombre,
      email,
      date:firebase.firestore.FieldValue.serverTimestamp() 
    })
    .then(()=>{
      console.log("Datos Guardados! ")

    })
    .catch(e=>console.error(e))
  }
  cleanData(){
    this.setState({
      ...this.state,
      nombre:"",
      email:""
    })
  }

  render(){
    /* console.log("2.LifeHook render") */
    return (
      
      <div  className="flex flex-col items-center justify-center text-red-400 bg-gray-200 ">
        <h1>Home</h1>
        <div className="flex flex-col">
          <label>Nombre</label>
          <input 
            type="text" 
            onChange={this.handleChange}
            name="nombre"
            value={this.state.nombre}></input>
          <label>Correo</label>
          <input 
            type="email" 
            onChange={this.handleChange}
            name="email"
            value={this.state.email}></input>
        </div>
        {/* Guardar */}
        <button 
          onClick={()=>{this.saveData(this.state.nombre,this.state.email)}
            }
          className="px-4 py-1 m-2 bg-blue-700 rounded-full outline-none cursor-pointer">
          Guardar</button>

        {/* Limpiar */}
        <button 
          onClick={()=>{this.cleanData()}}
          className="px-4 py-1 m-2 bg-blue-700 rounded-full outline-none cursor-pointer">
          Limpiar</button>

        {/* LISTAS */}
        <div>
          <h1>ESTA ES UNA LISTA</h1>
          <ul className="text-gray-600">
            {this.state.vector.map((v,n)=>{
              return(<li 
                className="my-1"
                key={n}>
                {v.nombre} 
                <Link 
                  className="flex items-center px-2 mx-1 bg-blue-700 rounded"
                  to={`/item/${v.id}`}>Detalles</Link>
                </li>)
            })}
          </ul>
        </div>

        {/* CONDICIONAL */}
        {this.state.loading && (
          <div>Cargando</div>
        )}
      </div>
    )
  }
}

export default Home
