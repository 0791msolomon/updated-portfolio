import React, { Component } from "react";
const axios = require("axios");
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getApi = async () => {
    // let response = await axios.get("/api/todo");
    // console.log(response);
  };
  render() {
    return (
      <React.Fragment>
        {/* <div>Home page baby</div> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}
          >
            <div className="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={this.getApi}>click me for api</button>
      </React.Fragment>
    );
  }
}
export default Home;
