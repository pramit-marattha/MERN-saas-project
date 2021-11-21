
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CalorieChart from "../CalorieChart";
import UserChart from "../UserChart";

const Meal = (props) => (
  <tr>
    <td>{props.username}</td>
    <td>{props.description}</td>
    <td>{props.calories}</td>
    <td>{props.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.meal._id} style={{ color: " #a04949" }}>
        Edit
      </Link>{" "}
      |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteMeal(props.meal._id);
          window.location.reload(false);
        }}
        style={{ color: " #a04949" }}
      >
        Delete
      </a>
    </td>
  </tr>
);

const DisplayFoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:5000/calorie/")
    .then((response) => {
        setFoods(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);

  function deleteMeal(id) {
    axios.delete("http://localhost:5000/calorie/" + id).then((response) => {
      console.log(response.data);
    });
    setFoods(foods.filter((el) => el._id !== id));
  }

  // function mealList() {
  //   return foods.map((currentmeal) => {
  //     return (
  //       <Meal
  //         meal={currentmeal}
  //         deleteMeal={deleteMeal}
  //         key={currentmeal._id}
  //       />
  //     );
  //   });
  // }

  return (
    <>
        <>
        <div class="container">
          <div class="card border-0 shadow my-4">
            <div class="card-body p-5">
              <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
                Food Tracker
              </h3>
              <table className="table" style={{ textAlign: "center" }}>
                <thead
                  className="thead"
                  style={{ backgroundColor: "rgb(160 73 73 / 68%)" }}
                >
                  <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Calories</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                {/* <tbody>{mealList()}</tbody> */}
              </table>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="card border-0 shadow my-2" style={{ padding: "2rem" }}>
            <div class="card-body p-1"></div>
            <CalorieChart/>
            {/* <UserChart/> */}
          </div>
        </div>
      </>
    </>
  )
}

export default DisplayFoodList
