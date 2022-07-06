/* eslint-disable default-case */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './login-signup.css'

function LoginForm() {


  const navigate = useNavigate();
  const [userLogin, setUserlogin] = useState({ email: "", password: "" });

  const redirectHandler = (token) => {
    sessionStorage.setItem('login', token)
    navigate('/')    
  }

  const authData = async () => {
      try {
        const { data: { status, message, token } } = await axios({
          url: 'http://localhost:8080/login',
          method: 'post',
          data: userLogin
        })
        console.log(status, message, token)

        switch (message) {
          case "flag3":
            return alert("validation failed !");
          case "flag0":
            return alert("All fields are required !");
          case "flag00":
            return alert("Server is down !");
          case "flag000":
            return alert("Please check your email !");
          case "flag0000":
            return alert("Wrong password !");
          case "flag1":
            return redirectHandler(token);
        }
      }  
      catch (error) {
        console.log('Somthing is wrong with form submission API', error)
      }
    }

    const onSubmit = (e) =>{
      e.preventDefault();
      authData()
    }   


  const onInputHandler = (e) => {
    setUserlogin({ ...userLogin, [e.target.name]: e.target.value })
  }


  console.log(userLogin)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: 'fitContent' }}>
      <div className="form">
        <div className='form_container' style={{ padding: '0 1rem' }}>
          <h2>Log In</h2>
          <form onSubmit={(e)=>onSubmit(e)} >
            <input name='email' onChange={(e) => onInputHandler(e)} required type='email' placeholder='Email' />
            <input name='password' onChange={(e) => onInputHandler(e)} required type='password' placeholder='Password' />
            <Link to='/' style={{ float: 'right' }}>Forgot Password</Link>
            <input type='submit' />
            <h3>OR</h3>
            <Link to='/signup' ><div className='newUser_btn'>New User?</div></Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;