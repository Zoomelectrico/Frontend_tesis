import React from "react";

class Sidebar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="profile">
          <picture>
            <img src="" alt="" />
          </picture>
          <h2>Nombre y Apellido</h2>
        </div>
        <div className="menu">
          <ul>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
