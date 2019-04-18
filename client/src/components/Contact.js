import React from "react";
import index from "./index.css";
const Contact = props => {
  return (
    <div style={{ border: "solid 3px black" }} className="container">
      <h1 className="display-4">Click these links if you'd like to connect</h1>
      <p className="lead">
        I typically don't respond to people I don't know, but if you send a
        message or contact me through the container above{" "}
        <i className="fa fa-arrow-up" /> I'll keep an eye out!
      </p>
      <hr className="my-4" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <a href="https://www.facebook.com/mateo.solomon.16" target="_blank">
          <i className="fa fa-facebook-square fa-5x" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-solomon-a14683140/"
          target="_blank"
        >
          <i className="fa fa-linkedin-square fa-5x" />
        </a>
        <a href="https://github.com/0791msolomon" target="_blank">
          <i className="fa fa-github-square fa-5x" />
        </a>
      </div>
    </div>
  );
};
export default Contact;
