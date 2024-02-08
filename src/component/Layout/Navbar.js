import React from 'react'
import CartButton from '../Cart/CartButton'
import './Navbar.css'


function Navbar() {
  return (
    <div className="nav-bar">
      <h1>FastMeals</h1>
      <CartButton/>
      
    </div>
  );
}

export default Navbar