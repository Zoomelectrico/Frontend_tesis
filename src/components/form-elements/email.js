import React from "react";

const EmailInput = props => (
  <div className="field">
    <label htmlFor={`${props.field.name}`} className="label">
      {`${props.field.title}`}
    </label>
    <div className="control">
      <input
        type="email"
        name={`${props.field.name}`}
        id={`${props.field.name}`}
        className="input"
        onChange={props.handleChange}
      />
    </div>
  </div>
);

export default EmailInput;
