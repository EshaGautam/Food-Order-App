import Card from "../UI/Card";
import React from 'react'
import './Summary.css'

function Summary() {
  return (
    <Card className="summary_card">
       <h1>Delicious Food,Delieverd To You</h1>
       <p>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
       </p>
       <p>All our meals are cooked with high-quality indgredients,just in time of course by experienced chefs!</p>
    </Card>
  )
}

export default Summary