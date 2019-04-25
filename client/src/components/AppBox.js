import React from "react";
import NavBar from "./Navbar";
import TextInputGroup from "./TextInputGroup";
import Navbar from "./Navbar";
import Routes from "./Routes";
class AppBox extends React.Component {
  state = {};
  render() {
    return (
      <div
        className=" col-10"
        style={{
          display: "flex",
          justifyContent: "center"

          // marginTop: "3%"
        }}
      >
        <NavBar />
      </div>
    );
  }
}
export default AppBox;
