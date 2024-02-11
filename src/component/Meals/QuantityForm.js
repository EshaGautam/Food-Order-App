import React, { useContext } from "react";
import "./QuantityForm.css";
import Button from "../Button/Button";
import MealContext from "../Store/MealContext";

function QuantityForm(props) {
  const cartCtx = useContext(MealContext);
  const {quantity,selectMealHandler, setQuantity,setQuantityForMeal,selectedMeal} = cartCtx;

  const handleQty = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  const handleItemAdded = (event) => {
    event.preventDefault();


    const existingMeal = selectedMeal.find(
      (meal, i) => i === props.indextoselect
    );

    if (existingMeal) {
      setQuantityForMeal(quantity, props.indextoselect);
    } else {
      selectMealHandler(props.indextoselect);
    }
  };

  return (
    <div>
      <form onSubmit={handleItemAdded} className="form-style">
        <label htmlFor="qty">
          Quantity:
          <input
            type="number"
            id="qty"
            onChange={handleQty}
            placeholder="0"
          ></input>
        </label>
        <Button type="submit" className="form_btn">
          +Add
        </Button>
      </form>
    </div>
  );
}

export default QuantityForm;
