import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ marginTop: "3%" }}
        >
          <h1 style={{ color: "white", marginRight: "1%" }}>Navbar</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  <h3
                    className="nav-link"
                    data-toggle="tooltip"
                    data-placement="auto"
                    title="Tooltip on top"
                  >
                    <i className="fas fa-home" /> Home
                  </h3>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <h3
                    className="nav-link"
                    data-toggle="tooltip"
                    data-placement="auto"
                    title="Tooltip on top"
                  >
                    <i className="fas fa-question" /> About
                  </h3>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/params/">
                  <h3
                    className="nav-link"
                    data-toggle="tooltip"
                    data-placement="auto"
                    title="Tooltip on top"
                  >
                    <i className="fas fa-home" /> Params
                  </h3>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/weather">
                  <h3
                    className="nav-link"
                    data-toggle="tooltip"
                    data-placement="auto"
                    title="Tooltip on top"
                  >
                    <i className="fas fa-home" /> Weather
                  </h3>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Random small projects
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">
                Higher - Lower
              </button>
              <button className="dropdown-item" type="button">
                Love Calculator
              </button>
              <button className="dropdown-item" type="button">
                To do List
              </button>
              <button className="dropdown-item" type="button">
                Voting (using Redux)
              </button>

              <button className="dropdown-item" type="button">
                Web Scraper
              </button>
              <button className="dropdown-item" type="button">
                Calculator
              </button>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
