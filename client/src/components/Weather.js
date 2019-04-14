import React from "react";
class Weather extends React.Component {
  componentDidMount = () => {
    console.log(process.env.REACT_APP_SHIT);
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
