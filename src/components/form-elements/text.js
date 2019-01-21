import React from "react";

const textInput = props => (
  <div className="field">
    <label htmlFor={`${props.field.name}`} className="label">
      {`${props.field.title}`}
    </label>
    <div className="control">
      <input
        type="text"
        name={`${props.field.name}`}
        id={`${props.field.name}`}
        className="input"
        onChange={props.handleChange}
      />
    </div>
  </div>
);

export default textInput;
