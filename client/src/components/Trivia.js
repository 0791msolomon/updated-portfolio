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
    urbanResults: []
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
                CLICK FOR RANDOM WORD
              </label>
              {/* <input
                className="form-control  "
                type="text"
                value={this.state.answer}
                onChange={() => null}
                style={inputBox}
                disabled
              /> */}
              <button className="form-control btn-info">Select random</button>
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
                disabled={this.state.urbanWord ? true : false}
                onClick={this.onClick}
              >
                SUBMIT ENTERED WORD
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
