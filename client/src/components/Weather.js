import React from "react";
class Weather extends React.Component {
  componentDidMount = () => {
    console.log(1);
  };
  render() {
    return (
      <div className="container">
        <h1>weather page</h1>
      </div>
    );
  }
}

export default Weather;
