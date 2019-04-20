import React from "react";
import { useAlert } from "react-alert";

const HigherLowerSelect = props => {
  const alert = useAlert();

  const displayErrors = () => {
    return [...Array(props.wrong)].map((e, i) => (
      <i
        key={i}
        className="col-xl-1 col-md-3 col-sm-4 col-xs-6  fa fa-close fa-3x"
        style={{ color: "red" }}
      />
    ));
  };
  const submitGuess = value => {
    if (props.hiddenNumber > props.clientNumber && value === "higher") {
      alert.success("That's correct!", { timeout: 1000 });
    } else {
      alert.error("Wrong!", { timeout: 1000 });
    }
    props.click(value);
  };
  // hiddenNumber={hiddenRandomNumber}
  // clientNumber={clientRandomNumber}
  // click={this.submitAnswer}
  // wrong={incorrectGuesses}
  return (
    <div className="col-12" style={{ marginBottom: "2%" }}>
      <div className=" highlowselectcontainer">
        <button
          className="arrowOptions col-lg-3 col-sm-12 btn-success"
          style={{ alignSelf: "center" }}
          onClick={() => submitGuess("higher")}
        >
          <i className="fa fa-arrow-circle-up fa-5x" />
        </button>
        <div
          className="arrowOptions col-lg-3 col-sm-12"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1 class="display-4">{props.clientNumber}</h1>
          <h4 class="display-6">
            Do you think this is Higher or Lower than the hidden number?
          </h4>
        </div>
        <button
          className="arrowOptions col-lg-3 col-sm-12 btn-danger"
          style={{ alignSelf: "center" }}
          onClick={() => submitGuess("lower")}
        >
          <i className="fa fa-arrow-circle-down fa-5x " />
        </button>
      </div>
      <hr className="my-4" />
      <div className="wrongAnswers col-12">{displayErrors()}</div>
    </div>
  );
};
export default HigherLowerSelect;
