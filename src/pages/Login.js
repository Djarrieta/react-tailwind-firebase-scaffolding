import React from "react"

const Login =(props)=>{
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmation,
    setConfirmation,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    problems
  }=props;


  return(
    <div className="container flex flex-col items-center justify-center w-full h-full max-w-md m-auto bg-white rounded-lg shadow">
      {/* Email */}
      <div className="flex flex-col">
        <label>Correo</label>
        <input 
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}  />
      </div>
      {/* password */}
      <div className="flex flex-col">
        <label>Contraseña</label>
        <input 
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}  />
      </div>
      {/* confirmation */}
      <div className="flex flex-col">
        <label>Confirmación</label>
        <input 
          type="confirmation"
          autoFocus
          required
          value={confirmation}
          onChange={(e)=>{setConfirmation(e.target.value)}}  />
      </div>
      {/* Problems */}
      <p>{problems}</p>
      {/* Buttons */}
      <div className="flex flex-col justify-between">
        {hasAccount ? (
          <>
          <button 
            className="py-1 my-4 text-gray-100 bg-green-500 rounded"
            onClick={handleLogin} >
            Ingreso</button>
          <p>
            ¿No tienes una cuenta?
            <span 
              className="text-blue-500 cursor-pointer"
              onClick={()=>setHasAccount(!hasAccount)}>Registro</span>
          </p>
        </>
        ) : (
          <>
            <button 
              className="py-1 my-4 text-gray-100 bg-green-500 rounded"
              onClick={handleSignUp} >
              Registro</button>
            <p>
              ¿Ya tienes una cuenta?
              <span 
                className="text-blue-500 cursor-pointer"
                onClick={()=>{setHasAccount(!hasAccount)}}>Ingresa</span>
            </p>
          </>
        )}
      </div>
      
    </div>
  )
}
export default Login