import React from "react";
import axios from "axios";

class ViewerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", company: "", email: "", alert: false };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  sendInfo = async e => {
    e.preventDefault();
    let response = await axios.post("/api/contactForm", {
      name: this.state.name,
      company: this.state.company,
      email: this.state.email
    });
  };
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <div
            className="col-lg-6 col-sm-12"
            style={{
              border: "solid 1px black",
              padding: "3% 1% 1% 1%",
              marginBottom: "3%"
            }}
          >
            <h3 style={{ display: "flex", textAlign: "center" }}>
              If you'd like to get in touch feel free to leave your information
              and I'll get back to you as soon as possible
            </h3>
            <form>
              <div className="form-group">
                <label>{"First & Last name"}</label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  name="name"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Interested Person"
                />
              </div>
              <div className="form-group">
                <label>Business Name</label>
                <input
                  onChange={this.onChange}
                  value={this.state.company}
                  name="company"
                  className="form-control"
                  placeholder="Best Company Ever"
                />
              </div>
              <div className="form-group">
                <label>Good email to reach you at</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  name="email"
                  className="form-control"
                  placeholder="myUniqueEmail@wahoo.com"
                />
              </div>
              <div className="form-group">
                <button
                  className="btn-success form-control"
                  onClick={this.sendInfo}
                >
                  <h3 style={{ display: "flex", justifyContent: "center" }}>
                    Contact me!
                  </h3>
                </button>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ViewerInfo;
