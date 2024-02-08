
import { FaShoppingCart } from "react-icons/fa";
import Button from '../Button/Button';
import './CartButton.css'
import Modal from "../Layout/Modal";
import {useState } from "react";


function CartButton() {

  const[orderInCart,setOrderInCart] = useState(false)

  const handleOrder =()=>{
    setOrderInCart(!orderInCart)
  }

  return (
    <>
      {!orderInCart && <Modal onClick={handleOrder} />}
      <div>
        <Button type="button" onClick={handleOrder} className="cart-button">
          <FaShoppingCart className="icon" />
          <div>Your-cart</div>
          <div className="count">1</div>
        </Button>
      </div>
    </>
  );
}

export default CartButton 