import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import NotFound from "./NotFound";
import Params from "./Params";
import Weather from "./Weather";
import TodoList from "./TodoList.js";
import HigherLower from "./smallProjects/HigherLower";
const Routes = props => {
  return (
    <div className="container">
      <div style={{ marginTop: "5%", padding: "0%" }}>
        <Switch>
          <Route exact path="/" component={HigherLower} />
          <Route path="/todo" component={TodoList} />
          <Route path="/blog" component={Blog} />
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
