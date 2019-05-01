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
        <h2
          style={{
            color: "white",
            fontFamily: '"Times New Roman", Times, serif'
          }}
        >
          Sample Projects
        </h2>
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
                <h5 className="navbarHeader" style={{ color: "white" }}>
                  Higher-Lower
                </h5>
              </Link>
            </li>
            <li
              style={{
                marginTop: "1%"
              }}
              className="nav-item"
            >
              <Link to="/weather">
                <h5 className="navbarHeader" style={{ color: "white" }}>
                  Weather Forecast
                </h5>
              </Link>
            </li>
            <li
              style={{
                marginTop: "1%"
              }}
              className="nav-item"
            >
              <Link to="/blog">
                <h5 className="navbarHeader" style={{ color: "white" }}>
                  Blog
                </h5>
              </Link>
            </li>
            <li
              style={{
                marginTop: "1%"
              }}
              className="nav-item"
            >
              <Link to="/trivia">
                <h5 className="navbarHeader" style={{ color: "white" }}>
                  Random API's
                </h5>
              </Link>
            </li>
            <li
              style={{
                marginTop: "1%"
              }}
              className="nav-item"
            >
              <Link to="/todo">
                <h5 className="navbarHeader" style={{ color: "white" }}>
                  Todo List
                </h5>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
