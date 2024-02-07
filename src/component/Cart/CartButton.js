import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Button from '../Button/Button';
import './CartButton.css'

function CartButton() {
  return (
    <div className='cart-button'>
      <FaShoppingCart className='icon'/>
      <Button className='add_cart'>Your-cart</Button>
      <div className='count'>1</div>
    </div>
  );
}

export default CartButton