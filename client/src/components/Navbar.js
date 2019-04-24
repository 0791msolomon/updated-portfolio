import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Link to="/">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              <h1>Home</h1>
            </button>
          </Link>
          <Link to="/params/">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              <h1>Params</h1>
            </button>
          </Link>
          <Link to="/weather">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              <h1>Weather forecast</h1>
            </button>
          </Link>
          <Link to="/higherlower">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              <h1>Higher-Lower</h1>
            </button>
          </Link>{" "}
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
