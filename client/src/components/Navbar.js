import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="auto"
                  title="Tooltip on top"
                >
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="auto"
                  title="Tooltip on top"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="auto"
                  title="Tooltip on top"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="tooltip"
                  data-placement="auto"
                  title="Tooltip on top"
                >
                  About
                </a>
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
