import React, { Component } from "react";
import "./index.css";
const About = props => {
  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            alignSelf: "center"
          }}
        >
          <i
            className="fa aboutMePointer fa-hand-o-right fa-2x"
            style={{ color: "white", fontWeight: "bold" }}
          />
          <div
            className="shit"
            data-toggle="collapse"
            data-target="#collapseExample"
            href="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h3> About</h3>
          </div>
          <i
            className="fa aboutMePointer fa-hand-o-left fa-2x"
            style={{ color: "white", fontWeight: "bold" }}
          />
        </div>
        <div
          className="container"
          style={{
            marginTop: "2%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <div id="collapseExample" className="collapse show">
            <h5
              style={{
                color: "white",
                fontFamily: '"Courier New", Courier, monospace'
              }}
            >
              Come back to this and write about me. Putting in nonsense to fill
              space blah blah blah blah blah blah blah blah blah blah blah blah
              blah blah blah blahblah blah blah blahblah blah blah blahblah blah
              blah blahblah blah blah blahblah blah blah blahblah blah blah
              blahblah blah blah blahblah blah blah blahblah blah blah blahblah
              blah blah blahblah blah blah blahblah blah blah blah
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const popWhite = {
  color: "white",
  fontWeight: "bold"
};
export default About;
