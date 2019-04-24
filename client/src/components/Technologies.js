import React from "react";
import "./index.css";
const Technologies = props => {
  return (
    <React.Fragment>
      <div
        style={{
          opacity: ".8",
          height: "100%",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <div className="display-1   " style={popWhite}>
          <span>Here are some of the technologies that I use.</span>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
          }}
        >
          <div id="frontendParent">
            <h1
              className="display-4"
              style={{ color: "#ff2647", fontWeight: "bold" }}
            >
              Front End
            </h1>
            <div id="hover-content">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    JavaScript
                  </h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    React.js
                  </h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>Redux</h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>jQuery</h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>CSS3</h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    Twitter Bootstrap
                  </h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>HTML5</h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>AJAX</h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    Material-UI
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          <div id="backendParent">
            <h1
              className="display-4"
              style={{ color: "#ff8026", fontWeight: "bold" }}
            >
              Middle Tier
            </h1>
            <div id="hover-content">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    Node.js
                  </h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    ExpressJS
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          <div id="middletierParent">
            <h1
              className="display-4"
              style={{ color: "#2667ff", fontWeight: "bold" }}
            >
              Backend
            </h1>
            <div id="hover-content">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    MongoDB
                  </h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    Firebase
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          <div id="otherParent">
            <h1
              className="display-4"
              style={{ color: "#47ff26", fontWeight: "bold" }}
            >
              Other
            </h1>
            <div id="hover-content">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    VS Code
                  </h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    Robo 3T
                  </h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    Advanced REST Client
                  </h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    Postman
                  </h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>TFS</h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>Git</h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>Trello</h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>
                    Agile/Scrum
                  </h1>
                </li>
                <li>
                  <h1 style={{ color: "white", fontWeight: "bold" }}>Heroku</h1>
                </li>
              </ul>
            </div>
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

export default Technologies;
