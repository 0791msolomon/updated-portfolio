import React from "react";
import classnames from "classnames";

import axios from "axios";
class Weather extends React.Component {
  state = { zip: "" };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="container weatherForecast col-12  ">
        <h1 className="display-2 lead ">Weather Forecast</h1>
        <div className="display-4 text-center">
          Enter in the 5 digit zip code for any area you'd like to see
        </div>
        <div
          className="col-lg-3 col-sm-12"
          style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
          <input
            type="number"
            value={this.state.zip}
            name="zip"
            onChange={this.onChange}
            placeholder={`Make sure it's a number!`}
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
            onClick={() => alert("hi")}
          >
            Gather Weather Data
          </button>
        </div>
      </div>
    );
  }
}

export default Weather;
