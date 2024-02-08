import React from "react";

const MealContext = React.createContext({
  meals: [],
  Quantity: 0,
  addMeals: (meal) => {},
  removeMeal: (index) => {},
});

export default MealContext;
