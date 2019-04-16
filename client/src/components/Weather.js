import React from "react";
import classnames from "classnames";
import * as weatherServices from "../services/WeatherServices";
import axios from "axios";
class Weather extends React.Component {
  state = { zip: "" };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  getForecast = e => {
    e.preventDefault();
    console.log(process.env.REACT_APP_WEATHER_API_KEY);
    const url = `api.openweathermap.org/data/2.5/forecast?zip=86005,us&APPID=49d19469d121e07effc45f5ef3da6790`;
    axios
      .get(url)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container weatherForecast  ">
        <h1 className="display-2 lead ">Weather Forecast</h1>
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
        </div>
      </div>
    );
  }
}

export default Weather;
