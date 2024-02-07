import "./Modal.css"
import React from 'react'
import Card from '../UI/Card'
import Button from "../Button/Button";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick}></div>;
}

function ModalOverlay() {
  return (
    <Card className="modal_card">
      <h2>Butter Chicken</h2>
      <div className="amt-dts">
        <h4>Total Amount:</h4>
        <span>12.99</span>
      </div>
      <div className="btn-dts">
        <Button className="btn-modal">Close</Button>
        <Button className="btn-modal">Order</Button>
      </div>
    </Card>
  );
}

function Modal(props) {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay/>,
        document.getElementById("modal-root")
      )}
    </div>
  );
}

export default Modal;