import React from "react";
import classnames from "classnames";
import "./index.css";
const HighLowInputs = props => {
  return (
    <div>
      <input
        type="number"
        className={classnames("form-control inputNumber", {
          "is-invalid": props.errors
        })}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        style={{ textAlign: "center" }}
        onChange={e => props.onChange(e)}
      />
      {props.errors && <div className="invalid-feedback">{props.errors}</div>}
    </div>
  );
};

export default HighLowInputs;
