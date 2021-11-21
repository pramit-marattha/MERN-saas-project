/** @format */

import React, { useEffect, useState } from "react";
import { Bar,Pie } from "react-chartjs-2";
import axios from "axios";

const CalorieChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let foodCal = [];
    let caloriesCal = [];
    axios
      .get("http://localhost:5000/calorie/")
      .then((res) => {
        console.log(res);
        for (let dataObj of res.data) {
          foodCal.push(dataObj.description);
          caloriesCal.push(parseInt(dataObj.caloriesCal));
          console.log(foodCal, caloriesCal);
        }
        setChartData({
          labels: foodCal,
          datasets: [
            {
              label: "Cal",
              data: caloriesCal,
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
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="App">
      <h4>Food Analytics</h4>

      <h5
        style={{
          fontSize: "20",
          textAlign: "center",

          marginBottom: "1em",
        }}
      >
        Calorie Intake per each Food
      </h5>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: {
              text: "Calorie Per Food ",
              fontSize: 20,
              fontColor: "#212529",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {},
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default CalorieChart;
