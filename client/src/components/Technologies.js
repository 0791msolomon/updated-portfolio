import React from "react";
import "./index.css";
const Technologies = props => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ color: "white", fontWeight: "bold", alignSelf: "center" }}>
        <h1>Here are some of the technologies that I use.</h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <div className="col-lg-3 col-md-12" id="frontendParent">
          <h2
            style={{
              color: "#ff2647",
              fontWeight: "bold",
              alignSelf: "center"
            }}
          >
            Front End
          </h2>
          <div id="hover-content">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                alignSelf: "center"
              }}
            >
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>
                  JavaScript
                </h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>React.js</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>Redux</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>jQuery</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>CSS3</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>
                  Twitter Bootstrap
                </h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>HTML5</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>AJAX</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>
                  Material-UI
                </h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-12" id="backendParent">
          <h2 style={{ color: "#ff8026", fontWeight: "bold" }}>Middle Tier</h2>
          <div id="hover-content">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                alignSelf: "center"
              }}
            >
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>Node.js</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>
                  ExpressJS
                </h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-12" id="middletierParent">
          <h2 style={{ color: "#2667ff", fontWeight: "bold" }}>Backend</h2>
          <div id="hover-content">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                alignSelf: "center"
              }}
            >
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>MongoDB</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>Firebase</h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-12" id="otherParent">
          <h2 style={{ color: "#47ff26", fontWeight: "bold" }}>Other</h2>
          <div id="hover-content">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                alignSelf: "center"
              }}
            >
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>VS Code</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>Robo 3T</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>
                  Advanced REST Client
                </h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>Postman</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>TFS</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>Git</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>Trello</h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>
                  Agile/Scrum
                </h4>
              </li>
              <li>
                <h4 style={{ color: "white", fontWeight: "bold" }}>Heroku</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const popWhite = {
  color: "white",
  fontWeight: "bold"
};

export default Technologies;
