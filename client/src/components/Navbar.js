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
        class="navbar navbar-expand-lg   navbar-dark bg-dark"
        style={{ padding: "0%", margin: "0%" }}
      >
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item  ">
              <Link to="/">
                <button
                  className="dropdown-item"
                  type="button"
                  // style={{ color: "white" }}
                >
                  <p>Higher-Lower</p>
                </button>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/todo">
                <button
                  className="dropdown-item"
                  type="button"
                  // style={{ color: "white" }}
                >
                  <p>Task List</p>
                </button>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link to="/params/">
                <button
                  className="dropdown-item"
                  type="button"
                  // style={{ color: "white" }}
                >
                  <p>Params</p>
                </button>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/weather">
                <button
                  className="dropdown-item"
                  type="button"
                  // style={{ color: "white" }}
                >
                  <p>Weather forecast</p>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
