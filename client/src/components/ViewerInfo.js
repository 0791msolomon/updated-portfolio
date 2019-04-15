import React from "react";
import axios from "axios";
import TextInputGroup from "./TextInputGroup";
import validator from "validator";

class ViewerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  clearForm = e => {
    e.preventDefault();
    this.setState({
      name: "",
      company: "",
      email: "",
      errors: {}
    });
  };
  sendInfo = e => {
    const { name, email, company } = this.state;
    //Check for errors
    e.preventDefault();
    if (name === "") {
      this.setState({
        errors: { name: "Name is required" }
      });
      return;
    }
    if (email === "" || !validator.isEmail(email)) {
      this.setState({
        errors: { email: "Email is required" }
      });
      return;
    }
    if (company === "") {
      this.setState({
        errors: { company: "Business is required" }
      });
      return;
    }
    axios.post("/api/contactForm", { name, company, email }).then(res => {
      console.log(res);
    });
    this.setState({
      errors: {}
    });
  };
  render() {
    const { errors } = this.state;
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
            <form onSubmit={this.sendInfo}>
              <TextInputGroup
                label={"First & Last Name"}
                onChange={this.onChange}
                value={this.state.name}
                name={"name"}
                placeholder="Interested Person"
                error={errors.name}
              />
              <TextInputGroup
                label={"Contact Email"}
                onChange={this.onChange}
                value={this.state.email}
                name={"email"}
                placeholder="uniqueEmail@gmail.com"
                error={errors.email}
              />
              <TextInputGroup
                label={"Business Name"}
                onChange={this.onChange}
                value={this.state.company}
                name={"company"}
                placeholder="Best Company Out there"
                error={errors.company}
              />
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
              <div className="form-group">
                <button
                  className="btn-warning form-control"
                  onClick={this.clearForm}
                >
                  <h3 style={{ display: "flex", justifyContent: "center" }}>
                    Clear Form
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
