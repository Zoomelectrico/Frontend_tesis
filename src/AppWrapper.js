import React from "react";
import { Route } from "react-router-dom";
import {
  About,
  Dashboard,
  Documents,
  Home,
  Postulation,
  Results,
  SignIn
} from "./pages";

class AppWrapper extends React.Component {
  state = {
    user: {
      login: false
    },
    token: "",
    routes: [
      {
        path: "/",
        exact: true,
        component: props => <Home {...props} user={this.state.user} />
      },
      {
        path: "/about",
        exact: false,
        component: props => <About {...props} user={this.state.user} />
      },
      {
        path: "/signin",
        exact: true,
        component: props => (
          <SignIn {...props} user={this.state.user} login={this.saveUser} />
        )
      },
      {
        path: "/documents",
        exact: true,
        component: props => <Documents {...props} user={this.state.user} />
      },
      {
        path: "/postulation",
        exact: true,
        component: props => <Postulation {...props} user={this.state.user} />
      },
      {
        path: "/results",
        exact: true,
        component: props => <Results {...props} user={this.state.user} />
      },
      {
        path: "/dashboard",
        exact: true,
        component: props => <Dashboard {...props} user={this.state.user} />
      }
    ]
  };

  saveUser = ({ user, token }) => {
    this.setState({ user, token });
    localStorage.setItem("__token__", token);
  };

  render() {
    return (
      <>
        {this.state.routes.map(route => (
          <Route
            path={route.path}
            component={route.component}
            key={route.path}
            exact={route.exact}
          />
        ))}
      </>
    );
  }
}

export default AppWrapper;
