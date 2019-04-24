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
              Home
            </button>
          </Link>
          <Link to="/about">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              About
            </button>
          </Link>
          <Link to="/params/">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              Params
            </button>
          </Link>
          <Link to="/weather">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              Weather
            </button>
          </Link>
          <Link to="/higherlower">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              Higher - Lower
            </button>
          </Link>{" "}
          <Link to="/">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              Home
            </button>
          </Link>
          <Link to="/about">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              About
            </button>
          </Link>
          <Link to="/params/">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              Params
            </button>
          </Link>
          <Link to="/weather">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              Weather
            </button>
          </Link>
          <Link to="/higherlower">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              Higher - Lower
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
