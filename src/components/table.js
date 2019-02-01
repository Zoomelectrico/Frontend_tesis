import React from "react";

const Table = ({ header, body, options }) => (
  <table className={options.join(" ")}>
    <thead>
      <tr>
        {header.map(header => (
          <th key={header.replace(" ", "-")}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {body.map((row, i) => (
        <tr key={i}>
          {row.map(val => (
            <td key={val.replace(" ", "")}>{val}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
