import React from "react";
import axios from "axios";
import "./index.css";
import * as triviaServices from "../services/Trivia.js";
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
      "dip",
      "yut",
      "cassie",
      "skeletons in the clost",
      "malone",
      "dudette",
      "trophy wife",
      "gump",
      "bum",
      "scmuck",
      "pree"
    ],
    numberSearch: "",
    numberFact: ""
  };

  onClick = async e => {
    e.preventDefault();
    try {
      let response = await triviaServices.randomTrivia();
      this.setState({
        trivia: true,
        category: response.data[0].category.title,
        question: response.data[0].question,
        answer: response.data[0].answer
      });
    } catch (err) {
      console.log(err);
      this.setState({
        category: "Not found",
        question: "Not found",
        answer: "Not found"
      });
    }
    // try {

    //   let response = await axios.get("http://jservice.io/api/random");

    //   console.log(response);
    //
    // } catch (err) {
    //   console.log(err);
    // }
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  randomizeWordSearch = async () => {
    var item = this.state.randomWords[
      Math.floor(Math.random() * this.state.randomWords.length)
    ];
    try {
      let response = await triviaServices.getTrivia(item);
      this.setState({
        urbanResults: response.data,
        urbanWord: item
      });
    } catch (err) {
      console.log(err);
      this.setState({ urbanResults: "Unable to find any definitions" });
    }
  };

  searchUrbanWord = async () => {
    let { urbanWord } = this.state;
    try {
      let response = await triviaServices.getTrivia(urbanWord);
      this.setState({
        urbanResults: response.data
      });
    } catch (err) {
      console.log(err);
      this.setState({ urbanResults: "Unable to find any definitions" });
    }
  };
  searchRandomNumber = async () => {
    var item = Math.floor(Math.random() * 100);
    try {
      let response = await triviaServices.getNumber(item);
      this.setState({
        numberSearch: item,
        numberFact: response.data
      });
    } catch (err) {
      console.log(err);
      this.setState({ urbanResults: "Unable to find any definitions" });
    }
  };
  numberSearch = async () => {
    try {
      let response = await triviaServices.getNumber(this.state.numberSearch);
      this.setState({
        numberFact: response.data
      });
    } catch (err) {
      console.log(err);
      this.setState({ urbanResults: "Unable to find any definitions" });
    }
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
            <h1> Numbers</h1>
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
                INPUT NUMBER
              </label>
              <input
                className="form-control  "
                type="number"
                name="numberSearch"
                value={this.state.numberSearch}
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
                NUMBER FACT
              </label>
              <textarea
                cols="30"
                rows="10"
                style={inputBox}
                value={this.state.numberFact}
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
                RANDOM NUMBER
              </label>
              <div className="col-12 weatherFadeInUp2">
                <button
                  className="btn-primary form-control"
                  onClick={this.searchRandomNumber}
                >
                  Search
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
            className="col-12"
          >
            <div className="col-12 weatherFadeInUp2">
              <button
                className={
                  this.state.numberSearch || this.state.numberSearch === 0
                    ? "btn-success form-control"
                    : "btn-danger form-control"
                }
                disabled={!this.state.numberSearch ? true : false}
                onClick={this.numberSearch}
              >
                {this.state.numberSearch ? "Search" : "No value"}
              </button>
            </div>
          </div>
        </div>
        {/* jfkldsajklf;dsjalkfjdsa;lfjsda;jfl;kdsaj;fjas;dlfjasdfkjl;dsaj;flsda */}
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
                //  name="urbanWord"
                //  value={this.state.urbanWord}
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
                //   value={this.state.urbanResults}

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
            className="col-12"
          >
            <div className="col-12 weatherFadeInUp2">
              <button
                className="btn-success form-control"
                onClick={this.onClick}
              >
                random trivia
              </button>
            </div>
          </div>
        </div>
        {/* jfkldsajklf;dsjalkfjdsa;lfjsda;jfl;kdsaj;fjas;dlfjasdfkjl;dsaj;flsda */}
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
            <h1>Urban Dictionary</h1>
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
                WORD
              </label>
              <input
                name="urbanWord"
                value={this.state.urbanWord}
                className="form-control  "
                type="text"
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
                DEFINITION
              </label>
              <textarea
                value={this.state.urbanResults}
                cols="30"
                rows="10"
                style={inputBox}
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
                RANDOM WORD
              </label>
              <div className="col-12 weatherFadeInUp2">
                <button
                  onClick={this.randomizeWordSearch}
                  className="form-control btn-primary"
                >
                  Search
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
            className="col-12"
          >
            <div className="col-12 weatherFadeInUp2">
              <button
                className={
                  this.state.urbanWord.trim()
                    ? "btn-success form-control"
                    : "btn-danger form-control"
                }
                disabled={!this.state.urbanWord.trim() ? true : false}
                onClick={this.searchUrbanWord}
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
