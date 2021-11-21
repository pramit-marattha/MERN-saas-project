/** @format */

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

const UserChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let username = [];
    let calories = [];
    axios
      .get("http://localhost:5000/calorie/")
      .then((res) => {
        console.log(res);
        for (const dataObj of res.data) {
          username.push(dataObj.username);
          calories.push(parseInt(dataObj.calories));
          console.log(username, calories);
        }
        setChartData({
          labels: username,
          datasets: [
            {
              label: "Calories",
              data: calories,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
              ],
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(username, calories);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      <div>
        <h5
          style={{
            fontSize: "20",
            textAlign: "center",
            marginTop: "2em",
            marginBottom: "1em",
          }}
        >
          Calorie Intake per User
        </h5>

        <Pie
          data={chartData}
          options={{
            title: {
              text: "Calorie per User",
              fontSize: 20,
              fontColor: "#212529",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart1;
