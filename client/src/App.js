import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import ViewerInfo from "./components/ViewerInfo";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <BrowserRouter>
          <Navbar />
          <div style={{ margin: "5%", height: "100%" }}>
            <Routes />
          </div>
          <div>
            <ViewerInfo />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
