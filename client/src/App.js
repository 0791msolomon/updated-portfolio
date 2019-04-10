import React, { Component } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <div style={{ margin: "5%" }}>
            <Routes />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
