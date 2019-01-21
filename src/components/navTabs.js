import React from "react";
import { Link } from "react-router-dom";

const NavTabs = props => (
  <div className="tabs is-centered">
    <ul>
      <li className={props.location === "/dashboard" ? "is-active" : ""}>
        <Link to="/dashboard">Perfil</Link>
      </li>
      <li className={props.location === "/dashboard/vote" ? "is-active" : ""}>
        <Link to="/dashboard/vote">Votar</Link>
      </li>
      <li
        className={props.location === "/dashboard/postulate" ? "is-active" : ""}
      />
    </ul>
  </div>
);

export default NavTabs;
