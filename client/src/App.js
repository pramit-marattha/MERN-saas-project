import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import MealsList from "./components/DisplayFoodList";
import EditMeal from "./components/EditFood";
import CreateMeal from "./components/AddFood";
import CreateUser from "./components/AddUser";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact component={MealsList} />
          <Route path="/edit/:id" component={EditMeal} />
          <Route path="/create" component={CreateMeal} />
          <Route path="/user" component={CreateUser} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
