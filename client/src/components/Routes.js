import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Routes = props => {
  return (
    <div style={{ height: "100vh" }}>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default Routes;
