import React, { useContext} from 'react'
import './QuantityForm.css'
import Button from '../Button/Button'
import MealContext from '../Store/MealContext'

function QuantityForm(props) {

const cartCtx = useContext(MealContext)
const{setQuantity,selectMealHandler} = cartCtx



  const handleQty =(event)=>{
    setQuantity(event.target.value)
  }
  
  const handleItemAdded =(event)=>{
   selectMealHandler(props.indextoselect)
    
  
 
    }
    
 
  return (
    <div>
      <form className="form-style">
        <label htmlFor="qty">
          Quantity:
          <input
            type="number"
            id="qty"
            onChange={handleQty}
            placeholder="0"
          ></input>
        </label>
        <Button type="button" onClick={handleItemAdded} className="form_btn">
          +Add
        </Button>
      </form>
    </div>
  );
}

export default QuantityForm