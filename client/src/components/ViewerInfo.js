import React from "react";
import axios from "axios";
import TextInputGroup from "./TextInputGroup";
import validator from "validator";
import Contact from "./Contact";
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
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold"
          }}
        >
          <div
            className="col-lg-6 col-sm-12"
            style={{
              border: "solid 3px white",
              padding: "3% 1% 1% 1%"
            }}
          >
            <h3
              style={{
                display: "flex",
                textAlign: "center",
                color: "white",
                fontWeight: "bold"
              }}
            >
              If you'd like to get in touch leave your information and I'll get
              back to you.
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
                  className="btn-info form-control"
                  onClick={this.sendInfo}
                  style={{ fontWeight: "bold" }}
                >
                  Contact me!
                </button>
              </div>
              <div className="form-group">
                <button
                  className="btn-danger form-control"
                  onClick={this.clearForm}
                  style={{ fontWeight: "bold" }}
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Contact />
      </React.Fragment>
    );
  }
}
export default ViewerInfo;
