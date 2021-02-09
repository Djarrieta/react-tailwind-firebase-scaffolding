import React from 'react'
/* import  db  from '../fire' */

class ItemDetail extends React.Component {
  state={
    loading:true,
    nombre:null,
    email:null,
    id:null
  }
/*   componentDidMount(){
    db.collection("items").doc(this.props.match.params.id).get()
    .then((r)=>{
      this.setState({
        loading:false,
        nombre:r.data().nombre,
        email:r.data().email,
        id:r.id
      })
    })
  } */
  render(){
    if(this.state.loading ){
      return <span className="container flex flex-col justify-center mx-auto">Cargando Datos...</span>
    }
    return (
      <div className="container flex flex-col mx-auto">
        <span>Id:{this.state.id}</span>
        <span>Nombre:{this.state.nombre}</span>
        <span>Correo:{this.state.email}</span>
      </div>
    )
  }
}

export default ItemDetail
