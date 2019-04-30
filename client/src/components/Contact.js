import React from "react";
import "./index.css";
const Contact = props => {
  return (
    <div
      // className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ border: "solid 3px white" }} className="col-lg-6 col-sm-12">
        <h1 className="display-4" style={popFont}>
          Click these links if you'd like to connect
        </h1>
        <p className="lead" style={popFont}>
          You can check me out on any of the links below, if you wanna get in
          touch fill out the form above
          <i className="fa fa-arrow-up" />
        </p>
        <hr className="my-4" style={{ backgroundColor: "white" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <a href="https://www.facebook.com/mateo.solomon.16" target="_blank">
            <i className="fa fa-facebook-square fa-5x iconHover" />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-solomon-a14683140/"
            target="_blank"
          >
            <i className="fa fa-linkedin-square fa-5x iconHover" />
          </a>
          <a href="https://github.com/0791msolomon" target="_blank">
            <i className="fa fa-github-square fa-5x iconHover" />
          </a>
        </div>
      </div>
    </div>
  );
};
const popFont = {
  color: "white",
  fontWeight: "bold"
};
export default Contact;
