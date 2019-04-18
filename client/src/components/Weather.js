import React from "react";
import classnames from "classnames";
import * as weatherServices from "../services/WeatherServices";
import moment from "moment";
import axios from "axios";
import ThreeDayForecast from "./charts/ThreeDayForecast";
class Weather extends React.Component {
  state = { zip: "", unit: "imperial", displayGraph: false };
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
    response.data.list.map((item, i) => {
      if (i === 0 || i % 2 === 0) {
        sixHourInterval.push(item);
      }
    });
    sixHourInterval.map(item => {
      console.log(item);
    });
    this.setState({ displayGraph: true });
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
          {this.state.displayGraph && <ThreeDayForecast />}
        </div>
      </div>
    );
  }
}

export default Weather;
