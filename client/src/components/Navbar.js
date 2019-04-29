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
      // <nav
      //   className="navbar navbar-expand-lg   navbar-dark bg-dark"
      //   style={{ padding: "0%", margin: "0%" }}
      // >
      //   <a class="navbar-brand" href="#">
      //     Mini-Projects
      //   </a>
      //   <button
      //     className="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarSupportedContent"
      //     aria-controls="navbarSupportedContent"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span className="navbar-toggler-icon" />
      //   </button>

      //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //     <Link to="/">
      //       <button
      //         className="dropdown-item"
      //         type="button"
      //         style={{ color: "white" }}
      //       >
      //         <p>Higher-Lower</p>
      //       </button>
      //     </Link>

      //     <Link to="/blog">
      //       <button
      //         className="dropdown-item"
      //         type="button"
      //         style={{ color: "white" }}
      //       >
      //         <p>Blog</p>
      //       </button>
      //     </Link>
      //     <Link to="/weather">
      //       <button
      //         className="dropdown-item"
      //         type="button"
      //         style={{ color: "white" }}
      //       >
      //         <p>Weather forecast</p>
      //       </button>
      //     </Link>
      //   </div>
      // </nav>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Mini project samples
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li style={{ marginTop: "1%" }} class="nav-item active">
              <Link to="/">
                <h4>Higher-Lower</h4>
              </Link>
            </li>
            <li style={{ marginTop: "1%" }} class="nav-item">
              <Link to="/weather">
                <h4>Weather Forecast</h4>
              </Link>
            </li>
            <li style={{ marginTop: "1%" }} class="nav-item">
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
