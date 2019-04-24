import React from "react";
import NavBar from "./Navbar";
import TextInputGroup from "./TextInputGroup";
import Navbar from "./Navbar";

class AppBox extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="col-10"
            style={{
              paddingTop: "5%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold"
            }}
          >
            <NavBar />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default AppBox;
