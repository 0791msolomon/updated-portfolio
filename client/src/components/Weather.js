import React from "react";
import classnames from "classnames";
import * as weatherServices from "../services/WeatherServices";
import moment from "moment";
import axios from "axios";
import "./index.css";
import ThreeDayForecast from "./charts/ThreeDayForecast";
import InvalidZip from "./charts/InvalidZip";
class Weather extends React.Component {
  state = {
    zip: "",
    unit: "imperial",
    displayGraph: false,
    sixHourInterval: [],
    notFound: false
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  getForecast = async e => {
    e.preventDefault();
    await this.setState({ notFound: false });
    try {
      let response = await weatherServices.forecast(
        this.state.zip,
        this.state.unit
      );
      console.log(response.data);
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
      this.setState({ displayGraph: true, sixHourInterval: arr });
    } catch (err) {
      this.setState({
        displayGraph: false,
        notFound: true
      });
    }
  };

  render() {
    return (
      <div
        className=" weatherForecast  "
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1
          className="display-3 lead weatherDisplayFallDown"
          style={{ color: "#0AA7F6", alignSelf: "center" }}
        >
          Weather Forecast
        </h1>
        <h4 className="weatherFadeInUp" style={gameRules}>
          - Results will give data on the temperature and humidity levels over
          the next 5 days
        </h4>
        <h4 className="weatherFadeInUp" style={gameRules}>
          - Results also display temperature and humidity averages over the
          course of the 5 day period.
        </h4>
        <h4 className="weatherFadeInUp" style={gameRules}>
          - Submit button will only be enabled once 5 digit zip code is entered
        </h4>
        <h4 className="weatherFadeInUp" style={gameRules}>
          - If entered zip code does not return any data you will be notified.
        </h4>
        <div className="  text-center weatherFadeInUp" style={gameRules}>
          <h1> Enter in the 5 digit zip code for any area you'd like to see</h1>
        </div>
        <div style={{ alignSelf: "center" }} className="weatherFadeInUp col-6">
          <form onSubmit={this.getForecast}>
            <input
              type="number"
              value={this.state.zip}
              style={{ textAlign: "center" }}
              name="zip"
              onChange={this.onChange}
              placeholder={`ZIP`}
              className="form-control weatherFadeInUp3 "
            />
            <br />
            <button
              disabled={this.state.zip.length < 5}
              className={
                this.state.zip.length === 5
                  ? "form-control weatherFadeInUp4 btn-info"
                  : "form-control weatherFadeInUp4 btn-default"
              }
              onClick={this.getForecast}
            >
              <span>
                Find <i class="fa fa-search" />
              </span>
            </button>
          </form>
          <br />
          <br />
        </div>
        <div className="col-lg-9 col-sm-12" style={{ alignSelf: "center" }}>
          {this.state.displayGraph && (
            <ThreeDayForecast info={this.state.sixHourInterval} />
          )}
          {this.state.notFound && <InvalidZip />}
        </div>
      </div>
    );
  }
}
const popWhite = {
  color: "white",
  fontWeight: "bold"
};
const center = {
  alignSelf: "center"
};
const gameRules = {
  color: "white",
  fontWeight: "bold",
  alignSelf: "center",
  fontFamily: '"Times New Roman", Times, serif'
};
export default Weather;
