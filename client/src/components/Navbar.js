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
      <nav
        className="navbar navbar-expand-lg   navbar-dark bg-dark"
        style={{ padding: "0%", margin: "0%" }}
      >
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link to="/">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              <p>Higher-Lower</p>
            </button>
          </Link>

          <Link to="/todo">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              <p>Task List</p>
            </button>
          </Link>

          <Link to="/params/">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              <p>Params</p>
            </button>
          </Link>
          <Link to="/blog">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              <p>Blog</p>
            </button>
          </Link>
          <Link to="/weather">
            <button
              className="dropdown-item"
              type="button"
              style={{ color: "white" }}
            >
              <p>Weather forecast</p>
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
