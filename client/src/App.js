import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewerInfo from "./components/ViewerInfo";
import Contact from "./components/Contact";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "./App.css";
class App extends Component {
  render() {
    const options = {
      // you can also just use 'bottom center'
      position: positions.BOTTOM_CENTER,
      timeout: 5000,
      offset: "30px",
      // you can also just use 'scale'
      transition: transitions.SCALE
    };
    return (
      <div style={{ height: "100%" }}>
        <AlertProvider template={AlertTemplate} {...options}>
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
        </AlertProvider>
      </div>
    );
  }
}

export default App;
