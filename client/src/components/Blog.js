import React from "react";
import "./index.css";
class Blog extends React.Component {
  state = { title: "", body: "" };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
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
          className="display-2 blogDisplayFallDown"
        >
          Blog
        </div>
        <div className="col-lg-9 col-md-12" style={{ alignSelf: "center" }}>
          <div class="form-group">
            <label htmlFor="title" className="titleFallDown">
              Title:
            </label>
            <input
              value={title}
              name="title"
              onChange={this.onChange}
              type="text"
              className="form-control titleFallDown"
              style={inputBoxes}
            />
            <label for="comment" className="bodyFallUp">
              Thoughts:
            </label>
            <textarea
              value={body}
              name="body"
              onChange={this.onChange}
              class="form-control bodyFallUp"
              rows="10"
              id="comment"
              style={inputBoxes}
            />
            <button
              className="btnFadeUp btn-success form-control"
              style={{ marginTop: "1%", marginBottom: "1%" }}
            >
              Submit Entry
            </button>
            <button
              className="btnFadeUp clearbtn   form-control"
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
