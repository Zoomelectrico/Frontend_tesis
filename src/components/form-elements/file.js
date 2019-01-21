import React from "react";

const FileInput = props => (
  <div className="file">
    <label className="file-label">
      <input
        type="file"
        name={`${props.field.name}`}
        id={`${props.field.name}`}
        className="file-input"
        onChange={props.handleChange}
      />
      <span className="file-cta">
        <span className="file-icon">
          <i className="fas fa-upload" />
        </span>
        <span className="file-label">{`${props.field.title}`}</span>
      </span>
    </label>
  </div>
);

export default FileInput;
