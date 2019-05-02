import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewerInfo from "./components/ViewerInfo";
import Contact from "./components/Contact";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import AppBox from "./components/AppBox";
import Trivia from "./components/Trivia";
import Routes from "./components/Routes";
import About from "./components/About";
import Technologies from "./components/Technologies";
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
      // <div style={{ height: "100%" }}>
      <div className="parallax">
        <AlertProvider template={AlertTemplate} {...options}>
          <Router>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
              }}
            >
              <div
                style={{
                  background: (0, 151, 19, 0.1),
                  paddingBottom: "3%",
                  alignSelf: "center"
                }}
                className="col-12"
              >
                <Navbar />
                <Routes />
              </div>
              <div
                style={{
                  marginTop: "3%",
                  background: (0, 151, 19, 0.1),
                  paddingBottom: "3%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
                className="  container"
              >
                {/* <div
                  className="display-4"
                  style={{
                    alignSelf: "center",
                    color: "white",
                    marginBottom: "3%",
                    fontFamily: "monospace"
                  }}
                >
                  HTTP requests utilizing 3rd party API's
                </div> */}
                <Trivia />
              </div>
              <div
                style={{
                  marginTop: "3%",
                  background: (0, 151, 19, 0.1),
                  paddingBottom: "3%"
                }}
                className="col-12"
              >
                <About />
              </div>
              <div
                style={{
                  marginTop: "3%",
                  background: (0, 151, 19, 0.1),
                  paddingBottom: "3%"
                }}
                className="col-12"
              >
                <Technologies />
              </div>
              <div
                style={{
                  marginTop: "3%",
                  background: (0, 151, 19, 0.1),
                  paddingBottom: "3%"
                }}
                className="col-12"
              >
                <ViewerInfo />
              </div>
              {/* <div className="parallax">
              <Contact />
            </div> */}
              <div />
            </div>
          </Router>
        </AlertProvider>
      </div>
    );
  }
}

export default App;
