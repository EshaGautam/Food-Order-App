import "./MealItems.css"
import Card from "../UI/Card";
import QuantityForm from "./QuantityForm";

function MealItems() {

const Meals = [
  { 
    name: "Butter Chicken",
    description:
      "Tender chicken cooked in a rich, creamy tomato-based sauce with butter and spices.",
     price: 12.99,
  },
  {
    name: "Biryani",
    description:
      "Fragrant rice dish with aromatic spices, basmati rice, and marinated meat or vegetables.",
    price: 10.99,
  },
  {
    name: "Samosa",
    description:
      "Deep-fried pastry filled with spiced potatoes, peas, and sometimes meat.",
    price: 2.99,
  },
  {
    name: "Palak Paneer",
    description: "Soft paneer cubes in a creamy spinach sauce with spices.",
    price: 11.99,
  },
  {
    name: "Masala Dosa",
    description: "Thin, crispy rice crepe filled with spiced potato filling.",
    price: 8.99,
  },
];


const MealData = Meals.map((data, index) => (
   
    <div className="meal-data" key={index}>
        <div >
       <h3>{data.name}</h3>
      <p>{data.description}</p>
      <h4>{data.price}</h4>
      </div>
      <div>
        <QuantityForm />
      </div>
      </div>
  
  
));

  return (
    <Card className='meal-item'>{MealData}</Card>
  )
}

export default MealItems