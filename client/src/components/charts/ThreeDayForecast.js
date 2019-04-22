import React from "react";
import { Bar } from "react-chartjs-2/es";
import moment from "moment";
const ThreeDayForecast = props => {
  let degrees = [];
  let humidity = [];
  let times = [];
  props.info.map(item => {
    console.log(item.temp);
    degrees.push(Math.ceil(item.temp));
    humidity.push(item.humidity);
    times.push(moment(item.time).format("ll"));
  });
  const tempData = {
    labels: times,
    datasets: [
      {
        label: "Temperature in Farenheit",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: degrees
      }
    ]
  };
  return (
    <div style={{ width: "100%" }}>
      <Bar
        data={tempData}
        // width={100}
        // height={50}
        // options={{
        //   maintainAspectRatio: false
        // }}
      />
    </div>
  );
};
export default ThreeDayForecast;
