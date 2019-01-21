import React from "react";

const PasswordInput = props => (
  <div className="field">
    <label htmlFor={`${props.field.name}`} className="label">
      {`${props.field.title}`}
    </label>
    <div className="control">
      <input
        type="password"
        name={`${props.field.name}`}
        id={`${props.field.name}`}
        className="input"
        onChange={props.handleChange}
      />
    </div>
  </div>
);

export default PasswordInput;
