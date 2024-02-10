import "./MealCart.css";
import Card from "../UI/Card";
import QuantityForm from "./QuantityForm";
import { useContext } from "react";
import MealContext from "../Store/MealContext";

function MealCart() {
  let cartCtx = useContext(MealContext);
  const { mealItems } = cartCtx;

  const MealData = mealItems.map((data, index) => (
    <div className="meal-data" key={index}>
      <div>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <h4>{data.price}</h4>
      </div>
      <div>
        <QuantityForm indextoselect={index} />
      </div>
    </div>
  ));

  return <Card className="meal-item">{MealData}</Card>;
}

export default MealCart;
