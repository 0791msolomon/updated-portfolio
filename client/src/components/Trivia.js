import React from "react";
import axios from "axios";
import "./index.css";
class Trivia extends React.Component {
  state = { number: "", trivia: false, category: "", question: "", answer: "" };

  onClick = async e => {
    e.preventDefault();
    try {
      let response = await axios.get("http://jservice.io/api/random");

      console.log(response);
      this.setState({
        trivia: true,
        category: response.data[0].category.title,
        question: response.data[0].question,
        answer: response.data[0].answer
      });
    } catch (err) {
      console.log(err);
    }
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div
          className="display-4 triviaDisplay"
          style={{
            color: "white",
            fontFamily: '"Times New Roman", Times, serif',
            paddingBottom: "5%",
            alignSelf: "center"
          }}
        >
          ¿ TRIVIA ?
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              alignSelf: "center",
              margin: "10%",
              display: "flex",
              flexDirection: "column"
            }}
            className="col-lg-3 col-sm-12 triviaDisplay"
          >
            <label
              style={{
                alignSelf: "center",
                color: "white",
                fontWeight: "bold"
              }}
            >
              CATEGORY
            </label>
            <input
              className="form-control  "
              type="text"
              value={this.state.category}
              onChange={() => null}
              style={inputBox}
              disabled
            />
            <label
              style={{
                alignSelf: "center",
                color: "white",
                marginTop: "10%",
                fontWeight: "bold"
              }}
            >
              QUESTION
            </label>
            <textarea
              cols="30"
              rows="10"
              style={inputBox}
              value={this.state.question}
              onChange={() => null}
              disabled
            />

            <label
              style={{
                alignSelf: "center",
                color: "white",
                marginTop: "10%",
                fontWeight: "bold"
              }}
            >
              ANSWER
            </label>
            <input
              className="form-control  "
              type="text"
              value={this.state.answer}
              onChange={() => null}
              style={inputBox}
              disabled
            />
          </div>
          <div
            style={{
              alignSelf: "center",
              margin: "10%",
              display: "flex",
              flexDirection: "column"
            }}
            className="col-lg-3 col-sm-12 triviaDisplay"
          >
            <label
              style={{
                alignSelf: "center",
                color: "white",
                fontWeight: "bold"
              }}
            >
              CATEGORY
            </label>
            <input
              className="form-control  "
              type="text"
              value={this.state.category}
              onChange={() => null}
              style={inputBox}
              disabled
            />
            <label
              style={{
                alignSelf: "center",
                color: "white",
                marginTop: "10%",
                fontWeight: "bold"
              }}
            >
              QUESTION
            </label>
            <textarea
              cols="30"
              rows="10"
              style={inputBox}
              value={this.state.question}
              onChange={() => null}
              disabled
            />

            <label
              style={{
                alignSelf: "center",
                color: "white",
                marginTop: "10%",
                fontWeight: "bold"
              }}
            >
              ANSWER
            </label>
            <input
              className="form-control  "
              type="text"
              value={this.state.answer}
              onChange={() => null}
              style={inputBox}
              disabled
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          <div className="col-lg-5 col-sm-12 weatherFadeInUp2">
            <button className="btn-success form-control" onClick={this.onClick}>
              Click for random trivia
            </button>
          </div>
          <div className="col-lg-5 col-sm-12 weatherFadeInUp2">
            <button className="btn-info form-control" onClick={this.onClick}>
              Click for random number
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const inputBox = {
  background: (0, 151, 19, 0.1),
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
};

export default Trivia;
