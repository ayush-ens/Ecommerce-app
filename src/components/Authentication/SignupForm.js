import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login-signup.css'

function SIgnupForm() {

  const navigate = useNavigate();

  const newUserData = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  };

  const[newUser, seretNewUser] = useState(newUserData)
  const[confirmPassword, setConformPassword] = useState('')
  const[loader, setLoader] = useState(false);

  const newUserHandler = (e) =>{
    seretNewUser({...newUser, [e.target.name]: e.target.value});
    e.target.name === 'confirmPassword' &&
    setConformPassword(e.target.value)
  }

  const onsubmitSucess = () =>{
    alert('user created successfuly')
    navigate('/login')
  }

  const onNewUserSubmit = async (e) => {
    e.preventDefault();
    // newUser.password !== confirmPassword ?
    // alert('Password does not match')
    // : const responseData = await axios({
    //   url : 'https://reqres.in/api/users',
    //   method: 'post',
    //   data: newUser
    // })

    // console.log(responseData.data)

    // responseData.status === 201?
    //   onsubmitSucess()
    // : alert('Oops somthing went wrong')
    
  }

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
    <div className="form">
        <div className='form_container'>
          <h2>Sign Up</h2>
          <form onSubmit={(e)=>onNewUserSubmit(e)}>
          <div>
            <input name='name' onChange={(e)=>newUserHandler(e)} required type='text' placeholder='First Name' />
            <input name='lastname' onChange={(e)=>newUserHandler(e)} required type='text' placeholder='Last Name' />
          </div>
          <input name='email' onChange={(e)=>newUserHandler(e)} required type='email' placeholder='Email' />
          <input name='phone' onChange={(e)=>newUserHandler(e)} type='number' placeholder='Phone number (optional)' />
          <div>
            <input name='password' onChange={(e)=>newUserHandler(e)} required type='password' placeholder='Password' />
            <input name='confirmPassword' onChange={(e)=>newUserHandler(e)} required type='password' placeholder='Confirm Password' />
          </div>
        <input type='submit' />
        <h3>OR</h3>
        <Link to='/login' ><div className='newUser_btn'>Already have an account</div></Link>
        </form>
        </div>
    </div>a
    </div>
  )
}

export default SIgnupForm