import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Params from "./components/Params";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewerInfo from "./components/ViewerInfo";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Router>
          <Navbar />
          <div className="container" style={{ marginTop: "5%" }}>
            {/* <Routes /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/params/:name" component={Params} />
              <Route path="/weather" component={Weather} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <div
            className="container"
            style={{
              marginTop: "10%",
              paddingBottom: "2%",
              textAlign: "center"
            }}
          >
            <ViewerInfo />
          </div>
        </Router>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
