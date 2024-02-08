import "./Modal.css";
import Card from "../UI/Card";
import Button from "../Button/Button";
import ReactDOM from "react-dom";
import MealContext from "../Store/MealContext";
import { useContext } from "react";


function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick}></div>;
}

function ModalOverlay(props) {
  const cartCtx = useContext(MealContext);
  const { selectedMeal, quantity } = cartCtx;

  const cartData =
    selectedMeal &&
    selectedMeal.map((meal, index) => (
      <div className="cart-data" key={index}>
        <h2>{meal.name}</h2>
        <div className="amt-dts">
          <h4>Total Amount:</h4>
          <span className="price">{meal.price * quantity}</span>
          <span className="qty">Qty:{quantity}</span>
        </div>
      </div>
    ));
    
  return (
    <Card className="modal_card">
      {cartData}
      <div className="btn-dts">
        <Button className="btn-modal" onClick={props.onClick}>
          Close
        </Button>
        <Button type="button" className="btn-modal">
          Order
        </Button>
      </div>
    </Card>
  );
}




function Modal(props) {
  return (
   
      <div>
        {ReactDOM.createPortal(
          <Backdrop onClick={props.onClick} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay onClick={props.onClick} />,
          document.getElementById("modal-root")
        )}
      </div>

  );
}

export default Modal;
