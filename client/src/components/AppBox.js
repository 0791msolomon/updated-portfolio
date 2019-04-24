import React from "react";
import NavBar from "./Navbar";
import TextInputGroup from "./TextInputGroup";
import Navbar from "./Navbar";
import Routes from "./Routes";
class AppBox extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="container col-10"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            float: "center",
            paddingTop: "5%"
            // marginTop: "3%"
          }}
        >
          <NavBar />
        </div>
      </React.Fragment>
    );
  }
}
export default AppBox;
