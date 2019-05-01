import React from "react";
import axios from "axios";
import "./index.css";
import classnames from "classnames";
class Trivia extends React.Component {
  state = {
    number: "",
    trivia: false,
    category: "",
    question: "",
    answer: "",
    urbanWord: "",
    urbanResults: [],
    randomWords: [
      "scamazon",
      "capper",
      "swooped",
      "lick",
      "antistalking",
      "dip"
    ]
  };

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
  randomizeWordSearch = () => {
    var item = this.state.randomWords[
      Math.floor(Math.random() * this.state.randomWords.length)
    ];
    console.log(item);
  };
  render() {
    return (
      <div
        // className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <div className="col-lg-4 col-sm-12">
          <div
            className=" triviaDisplay"
            style={{
              color: "white",
              fontFamily: '"Times New Roman", Times, serif',
              display: "flex",
              justifyContent: "center"
            }}
          >
            <h1> ¿ TRIVIA ?</h1>
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
              className=" triviaDisplay"
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
              <div className="col-12 weatherFadeInUp2">
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
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around"
            }}
          >
            <div className="col-12 weatherFadeInUp2">
              <button
                className="btn-success form-control"
                onClick={this.onClick}
              >
                Click for random trivia
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
          <div
            className="triviaDisplay"
            style={{
              color: "white",
              fontFamily: '"Times New Roman", Times, serif',
              textAlign: "center"
            }}
          >
            <h1> Urban Dictionary</h1>
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
              className="col-12 triviaDisplay"
            >
              <label
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                INPUT WORD
              </label>
              <input
                className="form-control "
                type="text"
                name="urbanWord"
                value={this.state.urbanWord}
                onChange={this.onChange}
                style={inputBox}
              />
              <label
                style={{
                  alignSelf: "center",
                  color: "white",
                  marginTop: "10%",
                  fontWeight: "bold"
                }}
              >
                RESULTS
              </label>
              <textarea
                cols="30"
                rows="10"
                style={inputBox}
                value={this.state.urbanResults}
                onChange={() => null}
                disabled
                style={{
                  overflow: "auto",
                  background: (0, 151, 19, 0.1),
                  color: "white",
                  fontWeight: "bold"
                }}
              />
              <label
                style={{
                  alignSelf: "center",
                  color: "white",
                  marginTop: "10%",
                  fontWeight: "bold"
                }}
              >
                {this.state.urbanWord.trim() ? "RANDOM DISABLED" : " RANDOM"}
              </label>
              {/* <input
                className="form-control  "
                type="text"
                value={this.state.answer}
                onChange={() => null}
                style={inputBox}
                disabled
              /> */}
              <div className="col-12 weatherFadeInUp2">
                <button
                  className={
                    this.state.urbanWord.trim()
                      ? "btn-danger form-control"
                      : "btn-success form-control"
                  }
                  disabled={this.state.urbanWord.trim() ? true : false}
                  onClick={this.randomizeWordSearch}
                >
                  {this.state.urbanWord.trim()
                    ? "Input has value"
                    : "Search random word"}
                </button>
              </div>
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
            <div className="col-12 weatherFadeInUp2">
              <button
                className={
                  this.state.urbanWord.trim()
                    ? "btn-success form-control"
                    : "btn-danger form-control"
                }
                disabled={!this.state.urbanWord.trim() ? true : false}
                onClick={this.onClick}
              >
                {this.state.urbanWord.trim() ? "Search" : "No value"}
              </button>
            </div>
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
