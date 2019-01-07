import React from "react";

class Sidebar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="panel column is-one-third">
        <p className="panel-heading">Side Bar</p>
        <div className="panel-block">
          <p>Algo</p>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
