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
  const {selectedMeal,increaseQuantity,decreaseQuantity} = cartCtx;
  

  const overallTotal = selectedMeal.reduce(
    (total, meal) => total + meal.price * meal.index,
    0
  )

  

  const cartData =
    selectedMeal &&
    selectedMeal.map((meal, index) => (
      <div className="cart-data" key={index}>
        <h2>{meal.name}</h2>
        <div className="amt-dts">
          <span className="price">{meal.price}</span>
          <span className="qty">Qty:{meal.index}</span>
        </div>
        <div className="qty-btn">
          <Button type="button" onClick={() => increaseQuantity(index)}>
            +
          </Button>
          <Button type="button" onClick={() => decreaseQuantity(index)}>
            -
          </Button>
        </div>
      </div>
    ));
    

  return (
    <Card className="modal_card">
      {selectedMeal.length > 0 ? (
        <>
          {cartData}
          <div className="total-amt">
            <span>Total Amount</span>
            <span>{overallTotal}</span>
          </div>
          <div className="btn-dts">
            <Button className="btn-modal" onClick={props.onClick}>
              Close
            </Button>
            <Button type="button" className="btn-modal">
              Order
            </Button>
          </div>
          
        </>
      ) : (
        <p>CART IS EMPTY</p>
      )}
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

export default Modal