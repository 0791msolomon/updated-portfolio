import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewerInfo from "./components/ViewerInfo";
import Contact from "./components/Contact";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Navbar />
          <div className="routeContainer">
            <Routes />
            <div className="col-xl-4  rightSideBar">
              <ViewerInfo />
              <Contact />
            </div>
          </div>
        </Router>
        <hr className="my-4" />
      </div>
    );
  }
}

export default App;
