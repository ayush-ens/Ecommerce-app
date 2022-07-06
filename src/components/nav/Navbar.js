import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from '../cart/Cart';
import './nav.css'

function Navbar() {

  const[cart, setCart] = useState(false)
  const[account, setAccount] = useState(false)

  const navigate = useNavigate()

  const onLogout = () =>{
    sessionStorage.removeItem('login');
    navigate('/login')
  }

  return (
    <div>
      <div className='nav_container'>
          <div onClick={()=> setCart(!cart)} className='cart_icon'>&#128722;</div>
        <div className='cart_icon' onClick={()=> setAccount(!account)}>&#128100;</div>
        {
          account &&
        <div className='profile_options'>
            <span>Account</span>
            <span onClick={onLogout}>Log Out</span>
        </div>
        }
      </div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default Navbar;