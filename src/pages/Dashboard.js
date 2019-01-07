import React from "react";
import { Sidebar } from "../components";
class Dashboard extends React.Component {
  state = {};
  render() {
    return (
      <div className="columns padder">
        <Sidebar />
        <div className="column">
          <h2 className="title">Dashboard</h2>
        </div>
      </div>
    );
  }
}

export default Dashboard;
