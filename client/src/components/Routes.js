import React from "react";
import { Route, Switch } from "react-router-dom";
import NumberTrivia from "./NumberTrivia";
import About from "./About";
import Blog from "./Blog";
import Trivia from "./Trivia";
import AllBlogs from "./AllBlogs";
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
          <Route path="/blog" component={Blog} />
          <Route path="/number" component={NumberTrivia} />
          <Route path="/allblogs" component={AllBlogs} />
          <Route path="/trivia" component={Trivia} />
          <Route path="/todo" component={TodoList} />
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
