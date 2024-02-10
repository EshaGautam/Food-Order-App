import React, { useContext } from "react";
import "./QuantityForm.css";
import Button from "../Button/Button";
import MealContext from "../Store/MealContext";

function QuantityForm(props) {
  const cartCtx = useContext(MealContext);
  const { selectMealHandler, setQuantity } = cartCtx;

  const handleQty = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  const handleItemAdded = (event) => {
    event.preventDefault();
    selectMealHandler(props.indextoselect);
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
