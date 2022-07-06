 import jwt_decode from 'jwt-decode';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const {Component} = props;  

    const navigate =  useNavigate()

    // G6^g#aRU
    
    // useEffect(()=>{
    //     let token = sessionStorage.getItem('login');
    //   try {
    //    let decoded = jwt_decode(token)
    //    console.log(decoded)   
    //     if(decoded){
    //       navigate('/')
    //   }
    //   } catch (error) {
    //     console.log(error)
    //     navigate('login')
    //   }

    // },[]);

  return (
    <div>
        <Component />
    </div>
  )
}

export default Protected