import React, { useState,useContext } from 'react'
import Axios from 'axios'
import {Form,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext'

function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const {setAuthState}=useContext(AuthContext);

    let navigate = useNavigate ();

    const login = () => {
      const data = { username: username, password: password };
      Axios.post("http://localhost:3001/auth/login", data).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.token);
          setAuthState({username:response.data.username,id:response.data.id,status:true});
          navigate("/");
        }
      });
    };
  return (
    <div>
      <h2 className='text-center'>Login</h2>
     <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>

        <input type='text' className='form-control my-3' onChange={(e)=> setUsername(e.target.value)} placeholder='Enter Username'/>
        <input type='password' className='form-control' onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password'/>
        <button className='form-control btn btn-primary my-3'  onClick={login}>Login</button>

        </div>
        <div className='col-md-4'></div>
      </div>
     </div>
    </div>
  )
}

export default Login
