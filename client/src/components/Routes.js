import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Params from "./Params";
import Weather from "./Weather";
import HigherLower from "../smallProjects/HigherLower";
const Routes = props => {
  return (
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
          <Route path="/higherlower" component={HigherLower} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};
export default Routes;
