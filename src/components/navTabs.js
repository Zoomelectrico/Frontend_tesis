import React from "react";
import { Link } from "react-router-dom";
const Tabs = ({ links }) => (
  <div className="tabs is-centered">
    <ul>
      {links.map(({ path, name }) => (
        <li key={name}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Tabs;
