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
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Mini project samples
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li
              style={{
                marginTop: "1%"
              }}
              className="nav-item active"
            >
              <Link to="/">
                <h4>Higher-Lower</h4>
              </Link>
            </li>
            <li
              style={{
                marginTop: "1%"
              }}
              className="nav-item"
            >
              <Link to="/weather">
                <h4>Weather Forecast</h4>
              </Link>
            </li>
            <li
              style={{
                marginTop: "1%"
              }}
              className="nav-item"
            >
              <Link to="/blog">
                <h4>Blog</h4>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
