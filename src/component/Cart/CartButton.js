import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Button from '../Button/Button';
import './CartButton.css'

function CartButton() {

  return (
    <Button type='button' className="cart-button">
      <FaShoppingCart className="icon" />
      <div>
      Your-cart
      </div>
      <div className="count">1</div>
    </Button>
  
  );
}

export default CartButton