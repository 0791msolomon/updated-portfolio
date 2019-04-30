import React from "react";

const Checkbox = props => {
  return (
    <div className="form-check" style={{ margin: "1%" }}>
      <input
        onChange={() => props.setPriority(props.value, props.color)}
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id="exampleRadios2"
        value={props.value}
        defaultChecked={props.defaultChecked}
      />
      <label className="form-check-label" style={{ color: "white" }}>
        {props.value}
      </label>
    </div>
  );
};
export default Checkbox;
