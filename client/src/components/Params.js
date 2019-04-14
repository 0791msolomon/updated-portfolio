import React from "react";

const Params = props => {
  return (
    <div className="container">
      <h1>{`Welcome to my portfolio ${props.match.params.name}!`}</h1>
    </div>
  );
};

export default Params;
