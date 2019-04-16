import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Params from "./components/Params";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewerInfo from "./components/ViewerInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Navbar />
          <div
            // className="container"
            style={{
              margin: "5%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly"
            }}
          >
            <div
              className="col-xl-7 col-lg-11  col-md-11  rounded"
              style={{ backgroundColor: "lightGrey", margin: "0% 0% 3% 0%" }}
            >
              <div style={{ marginTop: "5%" }}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/params/:name" component={Params} />
                  <Route path="/weather" component={Weather} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-10"
              style={{
                margin: "0% 3%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <ViewerInfo />
              <Contact />
            </div>
          </div>
        </Router>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
