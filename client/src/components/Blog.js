import React from "react";
import axios from "axios";
import "./index.css";
class Blog extends React.Component {
  state = { title: "", body: "" };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = e => {
    e.preventDefault();
    axios
      .post("/api/blog", { title: this.state.title, body: this.state.body })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    let { title, body } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            alignSelf: "center",
            fontFamily: '"Times New Roman", Times, serif'
          }}
          className="display-2 higherLowerDisplay"
        >
          Blog
        </div>
        <div className="col-lg-9 col-md-12" style={{ alignSelf: "center" }}>
          <div class="form-group">
            <label htmlFor="title" className="higherLowerDisplay">
              Title:
            </label>
            <input
              value={title}
              name="title"
              onChange={this.onChange}
              type="text"
              className="form-control higherLowerDisplay"
              style={inputBoxes}
            />
            <label for="comment" className="higherLowerRollIn2">
              Thoughts:
            </label>
            <textarea
              value={body}
              name="body"
              onChange={this.onChange}
              class="form-control higherLowerRollIn2"
              rows="10"
              id="comment"
              style={inputBoxes}
            />
            <button
              className="buttonFadeUp btn-success form-control"
              style={{ marginTop: "1%", marginBottom: "1%" }}
              onClick={this.submit}
            >
              Submit Entry
            </button>
            <button
              className="buttonFadeUp clearbtn   form-control"
              style={{ backgroundColor: "grey", color: "white" }}
            >
              Clear form
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const inputBoxes = {
  background: (0, 151, 19, 0.1),
  color: "white",
  fontWeight: "bold",
  marginBottom: "1%"
};
export default Blog;
