import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Routes = props => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default Routes;
