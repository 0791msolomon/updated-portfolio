import React, { Component } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Home />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
