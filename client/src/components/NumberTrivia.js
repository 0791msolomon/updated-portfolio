import React from "react";
import axios from "axios";

class NumberTrivia extends React.Component {
  state = { number: "" };

  onClick = async e => {
    e.preventDefault();
    try {
      let response = await axios.get("http://jservice.io/api/random");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="display-4" style={{ color: "white" }}>
          Enter Number for random fact
        </div>
        <div className="col-lg-6 col-sm-12">
          <input
            className="form-control"
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.onChange}
          />
          <button className="btn-success form-control" onClick={this.onClick}>
            Click for random trivia
          </button>
        </div>
      </div>
    );
  }
}

export default NumberTrivia;
