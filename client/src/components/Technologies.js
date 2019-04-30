import React from "react";
import "./index.css";
const Technologies = props => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div style={{ color: "white", fontWeight: "bold", alignSelf: "center" }}>
        <h1 style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          Familiar Technologies
        </h1>
      </div>
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        <div className="col-12" id="frontendParent">
          <h2
            style={{
              color: "#ff2647",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              fontFamily: '"Times New Roman", Times, serif'
            }}
          >
            Front End
          </h2>
          <div id="hover-content">
            <ul
              className="slideInRight"
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>
                  JavaScript,
                </h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>
                  React.js,
                </h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>Redux,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>jQuery,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>CSS3,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>
                  CSS Flexbox,
                </h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>
                  Twitter Bootstrap,
                </h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>HTML5,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>AJAX,</h6>
              </li>{" "}
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>
                  Material-UI
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12" id="backendParent">
          <h2
            style={{
              color: "#ff8026",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              fontFamily: '"Times New Roman", Times, serif'
            }}
          >
            Middle Tier
          </h2>
          <div id="hover-content">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>Node.js,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>
                  ExpressJS
                </h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12" id="middletierParent">
          <h2
            style={{
              color: "#2667ff",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              fontFamily: '"Times New Roman", Times, serif'
            }}
          >
            Backend
          </h2>
          <div id="hover-content">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>MongoDB,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>Firebase</h6>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12" id="otherParent">
          <h2
            style={{
              color: "#47ff26",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              fontFamily: '"Times New Roman", Times, serif'
            }}
          >
            Other
          </h2>
          <div id="hover-content">
            <ul
              style={{
                justifyContent: "center",
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignSelf: "center"
              }}
            >
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>VS Code,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>Robo 3T,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>
                  Advanced REST Client,
                </h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>Postman,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>TFS,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>Git,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>Trello,</h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>
                  Agile/Scrum ,
                </h6>
              </li>
              <li style={{ marginLeft: "1%" }}>
                <h6 style={{ color: "white", fontWeight: "bold" }}>Heroku</h6>
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
