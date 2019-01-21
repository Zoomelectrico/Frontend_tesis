import React from "react";
import { NavTabs, Profile, Vote } from "../components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    component: Profile
  },
  {
    path: "/dashboard/vote",
    component: Vote
  }
];

class Dashboard extends React.Component {
  state = {};
  componentDidMount() {
    console.log(this.props);
    console.log(this.state);
  }
  render() {
    return (
      <Router>
        <div className="big-bg">
          <div className="dashboard container">
            <div className="main">
              <NavTabs location={this.props.location} />
              {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Dashboard;
