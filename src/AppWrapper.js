import React from "react";
import Cookies from "universal-cookie";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import {
  About,
  Dashboard,
  Documents,
  Home,
  Postulation,
  Results,
  SignIn,
  Vote,
  Postulate,
  Candidates
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
        component: props => (
          <Home {...props} user={this.state.user} logout={this.logout} />
        )
      },
      {
        path: "/about",
        exact: false,
        component: props => (
          <About {...props} user={this.state.user} logout={this.logout} />
        )
      },
      {
        path: "/signin",
        exact: true,
        component: props => (
          <SignIn
            {...props}
            user={this.state.user}
            logout={this.logout}
            login={this.saveUser}
          />
        )
      },
      {
        path: "/documents",
        exact: true,
        component: props => (
          <Documents {...props} user={this.state.user} logout={this.logout} />
        )
      },
      {
        path: "/postulation",
        exact: true,
        component: props => (
          <Postulation {...props} user={this.state.user} logout={this.logout} />
        )
      },
      {
        path: "/results",
        exact: true,
        component: props => (
          <Results {...props} user={this.state.user} logout={this.logout} />
        )
      },
      {
        path: "/profile",
        exact: true,
        component: props => (
          <Dashboard {...props} user={this.state.user} logout={this.logout} />
        )
      },
      {
        path: "/vote",
        exact: true,
        component: props => (
          <Vote {...props} user={this.state.user} logout={this.logout} />
        )
      },
      {
        path: "/postulate",
        component: props => (
          <Postulate {...props} user={this.state.user} logout={this.logout} />
        )
      },
      {
        path: "/candidate",
        component: props => (
          <Candidates {...props} user={this.state.user} logout={this.logout} />
        )
      }
    ]
  };

  componentDidMount() {
    const user = new Cookies().get("uv__rs__");
    const token = new Cookies().get("uv__kn__");
    if (user) {
      user.login = true;
      this.setState({ user, token });
    }
  }

  logout = () => {
    new Cookies().remove("uv__rs__");
    new Cookies().remove("uv__kn__");
    const { user } = this.state;
    Object.keys(user).forEach(key => {
      user[key] = null;
    });
    user.login = false;
    this.setState({
      user,
      token: null
    });
    this.props.history.push("/");
  };

  saveUser = ({ user, token }) => {
    this.setState({ user, token });
    const cookies = new Cookies();
    // uv__rs__ -> user
    cookies.set("uv__rs__", user, { maxAge: 1000 * 60 * 60 * 30, path: "/" });
    // uv__kn__ -> token
    cookies.set("uv__kn__", token, { maxAge: 1000 * 60 * 60 * 30, path: "/" });
    this.props.history.push("/profile");
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

export default withRouter(AppWrapper);
