import React from "react";
import classnames from "classnames";
import * as weatherServices from "../services/WeatherServices";
import moment from "moment";
import axios from "axios";
import ThreeDayForecast from "./charts/ThreeDayForecast";
class Weather extends React.Component {
  state = {
    zip: "",
    unit: "imperial",
    displayGraph: false,
    sixHourInterval: []
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  getForecast = async e => {
    e.preventDefault();
    let response = await weatherServices.forecast(
      this.state.zip,
      this.state.unit
    );
    let sixHourInterval = [];
    for (let i = 0; i < response.data.list.length; i++) {
      if (
        !sixHourInterval.includes(
          moment(response.data.list[i].dt_txt).format("dddd")
        )
      ) {
        sixHourInterval.push(
          response.data.list[i],
          moment(response.data.list[i].dt_txt).format("dddd")
        );
      }
    }
    let arr = [];
    sixHourInterval.map(item => {
      if (typeof item === "object") {
        arr.push({
          temp: item.main.temp,
          humidity: item.main.humidity,
          time: moment(item.dt_txt).format("lll")
        });
      }
    });
    console.log(arr);
    this.setState({ displayGraph: true, sixHourInterval: arr });
  };
  render() {
    return (
      <div className="container weatherForecast  ">
        <h1 className="display-2 lead " style={{ color: "#0AA7F6" }}>
          Weather Forecast
        </h1>
        <div className="display-4 text-center">
          Enter in the 5 digit zip code for any area you'd like to see
        </div>
        <div
          // className="col-lg-3 col-sm-12"
          style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
          <form onSubmit={this.getForecast}>
            <input
              type="number"
              value={this.state.zip}
              name="zip"
              onChange={this.onChange}
              placeholder={`ZIP`}
              className="form-control "
            />
            <br />
            <button
              disabled={this.state.zip.length < 5}
              btn-info
              className={classnames("form-control", {
                "btn-info": this.state.zip.length > 4,
                "btn-default": this.state.zip.length < 5
              })}
              onClick={this.getForecast}
            >
              Gather Weather Data
            </button>
          </form>
          {this.state.displayGraph && (
            <ThreeDayForecast info={this.state.sixHourInterval} />
          )}
        </div>
      </div>
    );
  }
}

export default Weather;
