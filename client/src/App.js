import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewerInfo from "./components/ViewerInfo";
import Contact from "./components/Contact";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import AppBox from "./components/AppBox";
import Routes from "./components/Routes";

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
      <div className="parallax">
        <AlertProvider template={AlertTemplate} {...options}>
          <Router>
            <AppBox />
            <div className="parallax">
              <Routes />
            </div>
            <div className="parallaxJr" />
            {/* <div>
              <Routes />
            </div> */}
            <div className="parallax">
              <ViewerInfo />
            </div>
            <div className="parallax">
              <Contact />
            </div>
          </Router>
        </AlertProvider>
      </div>
    );
  }
}

export default App;
