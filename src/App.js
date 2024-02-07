
import Modal from "./component/Layout/Modal";
import Navbar from "./component/Layout/Navbar";
import MealItems from "./component/Meals/MealItems";
import Summary from "./component/Summary/Summary";


function App() {
  return (
    <>
     <Navbar/>
     <Modal/>
     <Summary/>
     <MealItems/>
    </>
  );
}

export default App;
