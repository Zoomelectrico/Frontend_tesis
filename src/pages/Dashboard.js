import React from "react";
import { Sidebar } from "../components";
class Dashboard extends React.Component {
  state = {};
  render() {
    return (
      <div className="big-bg">
        <div className="dashboard container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main">
            <h2 className="title">Main</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
