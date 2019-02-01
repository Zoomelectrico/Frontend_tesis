import React from "react";

const SelectInput = ({ options, handleChange, name, title }) => (
  <div className="field">
    <label htmlFor={name} className="label">
      {title}
    </label>
    <div className="control">
      <div className="select is-fullwidth">
        <select onChange={handleChange} id={name} name={name}>
          {options.map(option => (
            <option value={option.value} key={option.name.replace(" ", "")}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export default SelectInput;
