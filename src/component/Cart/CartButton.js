
import { FaShoppingCart } from "react-icons/fa";
import Button from '../Button/Button';
import './CartButton.css'
import Modal from "../Layout/Modal";
import {useContext, useState } from "react";
import MealContext from "../Store/MealContext";


function CartButton() {

 const [orderInCart, setOrderInCart] = useState(false);
  const cartCtx = useContext(MealContext)
  const{selectedMeal}=cartCtx
 
let count = selectedMeal.length
    
  
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
          <div className="count">{count}</div>
        </Button>
      </div>
    </>
  );
}


export default CartButton 