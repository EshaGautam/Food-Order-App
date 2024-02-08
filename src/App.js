import Navbar from "./component/Layout/Navbar";
import MealCart from "./component/Meals/MealCart";
import MealProvider from "./component/Store/MealProvider";
import Summary from "./component/Summary/Summary";


function App() {
  return (
    <MealProvider>
      <Navbar />
      <Summary />
      <MealCart />
    </MealProvider>
  )
}

export default App;
