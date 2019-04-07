import React, { Component } from "react";
const axios = require("axios");
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getAPI = async () => {
    let response = await axios.get("/api/hello");
    console.log(response);
  };

  render() {
    return (
      <React.Fragment>
        <div>Home page baby</div>
        <button onClick={this.getAPI}>Click to check api call</button>
      </React.Fragment>
    );
  }
}
export default Home;
