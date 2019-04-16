import React from "react";
import index from "./index.css";
const Contact = props => {
  return (
    <div class="jumbotron">
      <h1 class="display-4">Click these links if you'd like to connect</h1>
      <p class="lead">
        I typically don't respond to people I don't know, but if you send a
        message or contact me through the container above{" "}
        <i class="fa fa-arrow-up" /> I'll keep an eye out!
      </p>
      <hr class="my-4" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <a href="https://www.facebook.com/mateo.solomon.16" target="_blank">
          <i class="fa fa-facebook-square fa-5x" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-solomon-a14683140/"
          target="_blank"
        >
          <i class="fa fa-linkedin-square fa-5x" />
        </a>
        <a href="https://github.com/0791msolomon" target="_blank">
          <i class="fa fa-github-square fa-5x" />
        </a>
      </div>
    </div>
  );
};
export default Contact;
