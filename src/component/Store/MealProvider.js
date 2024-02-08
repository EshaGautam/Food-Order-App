import React, {useState } from "react";
import MealContext from "./MealContext";

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

const MealProvider = (props) => {
    const[quantity,setQuantity]=useState(0)
    const[mealItems,setMealItems] = useState(Meals)
    const [selectedMeal, setSelectedMeal] = useState([]);
    
  const selectMealHandler=(index)=>{
    let selected=mealItems.filter((meal,i)=>i===index)
    setSelectedMeal(prev=>[...prev,...selected])
    console.log(selected);
  }


  const addMealsItems = (meal) => {
   setMealItems((prev)=>[...prev,{meal}])
  };

  const removeMealItems = (index) => {
    let updateMeal = mealItems.filter((meal,i) => i !== index);
    setMealItems(updateMeal)
  };


  const meals = {
    mealItems,
    quantity,
    selectedMeal,
    selectMealHandler,
    addMealsItems,
    removeMealItems,
    setQuantity
  };

  return (
    <MealContext.Provider value={meals}>
        {props.children}
        </MealContext.Provider>
  );
};

export default MealProvider;
