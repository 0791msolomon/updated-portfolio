import React from "react";
import Input from "./HighLowInputs";
import HigherLowerSelect from "./HigherLowerSelect";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { useAlert } from "react-alert";

import _ from "underscore";
import "./index.css";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

class HigherLower extends React.Component {
  state = {
    numbersEntered: false,
    low: "",
    high: "",
    errors: {},
    clientRandomNumber: null,
    hiddenRandomNumber: null,
    incorrectGuesses: 0,
    correctGuesses: 0
  };
  onChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  setLimits = e => {
    const { low, high } = this.state;
    e.preventDefault();
    if (low === "") {
      this.setState({
        numbersEntered: false,
        errors: {
          low: "Please enter a number"
        }
      });
      return;
    } else if (high === "") {
      this.setState({
        numbersEntered: false,
        errors: { high: "Please enter a number" }
      });
      return;
    } else if (Number(low) > Number(high)) {
      this.setState({
        numbersEntered: false,
        errors: { low: "Low number cannot be above high number" }
      });
      return;
    } else if (Number(high) - Number(low) < 10) {
      this.setState({
        numbersEntered: false,
        errors: {
          high: "High must be at least 10 more than low"
        }
      });
      return;
    } else {
      this.setState({
        clientRandomNumber: _.random(Number(low), Number(high)),
        hiddenRandomNumber: _.random(Number(low), Number(high))
      });
    }
    this.setState({ errors: {}, numbersEntered: true });
  };

  submitAnswer = answer => {
    const { clientRandomNumber, hiddenRandomNumber, high, low } = this.state;
    if (
      (clientRandomNumber > hiddenRandomNumber && answer === "higher") ||
      (clientRandomNumber < hiddenRandomNumber && answer === "lower")
    ) {
      this.setState({
        correctGuesses: (this.state.correctGuesses += 1),
        clientRandomNumber: _.random(Number(low), Number(high)),
        hiddenRandomNumber: _.random(Number(low), Number(high))
      });
    } else {
      alert.error("wrong");
      this.setState({
        incorrectGuesses: (this.state.incorrectGuesses += 1),
        clientRandomNumber: _.random(Number(low), Number(high)),
        hiddenRandomNumber: _.random(Number(low), Number(high))
      });
    }
  };
  render() {
    const {
      numbersEntered,
      errors,
      clientRandomNumber,
      incorrectGuesses
    } = this.state;
    return (
      <React.Fragment>
        <Provider template={AlertTemplate} {...options}>
          <div className="higherLowerContainer ">
            <h1 class="display-1">Higher or lower?</h1>
            <blockquote class="blockquote text-center">
              <p class="mb-0">
                {`Set a high number limit & a low number limit, then when a number is displayed guess if the number shown is higher or lower than the hidden number`}
              </p>

              <footer class="blockquote-footer">
                Rules Are <i className="fa fa-arrow-circle-down  " />
                <ul style={{ listStyle: "none" }}>
                  <li>
                    Make sure high and low are at least 10 apart or it's no fun
                  </li>
                  <li>Don't go above 500 for high number</li>
                  <li>Don't go below -500 for low number</li>
                  <li>You go until you get 10 wrong</li>
                  <li>Wrong guesses will be displayed on bottom</li>
                </ul>
              </footer>
            </blockquote>

            <form className="inputContainer col-6">
              <Input
                name="low"
                value={this.state.low}
                placeholder="Low Limit"
                errors={errors.low}
                onChange={this.onChange}
              />
              <Input
                name="high"
                value={this.state.high}
                placeholder="High Limit"
                errors={errors.high}
                onChange={this.onChange}
              />
              <button
                onClick={this.setLimits}
                className=" inputNumber form-control btn-success"
              >
                Set Limits
              </button>
            </form>
            {numbersEntered ? (
              <div
                style={{
                  marginTop: "3%",
                  height: "100%",
                  width: "100%",
                  textAlign: "center"
                }}
              >
                <HigherLowerSelect
                  clientNumber={clientRandomNumber}
                  click={this.submitAnswer}
                  wrong={incorrectGuesses}
                />
              </div>
            ) : null}
          </div>
        </Provider>
      </React.Fragment>
    );
  }
}

export default HigherLower;
