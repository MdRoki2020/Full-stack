import React, { useState } from 'react'
import Axios from 'axios'

function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const login=()=>{
        const data={username:username,password:password};
        Axios.post("http://localhost:3001/auth/login",data).then((res)=>{
            console.log(res.data);
        })
    }
  return (
    <div>
      <input type='text' onChange={(e)=> setUsername(e.target.value)} placeholder='Enter Username'/>
      <input type='password' onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password'/>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
