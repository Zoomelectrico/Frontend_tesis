import React, { lazy, Suspense } from "react";
import Cookies from "universal-cookie";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";
import { NotFound } from "./pages";
import { Loading, ProtectedRoute } from "./components";
import { env } from "./utils";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

class App extends React.Component {
  routes = [
    {
      path: "/",
      exact: true,
      component: props => (
        <Home {...props} user={this.state.user} logout={this.logout} />
      )
    },
    {
      path: "/auth/register",
      exact: true,
      component: props => (
        <Register
          {...props}
          register={this.register}
          logout={this.logout}
          onChangeRegister={this.onChangeRegister}
        />
      )
    },
    {
      path: "/auth/login",
      exact: true,
      component: props => (
        <Login
          {...props}
          login={this.login}
          logout={this.logout}
          onChangeLogin={this.onChangeLogin}
        />
      )
    },
    {
      path: "/app/dashboard",
      exact: false,
      component: props => (
        <Dashboard
          {...props}
          user={this.state.user}
          logout={this.logout}
          updateUser={this.updateUser}
          onChangeUpdate={this.onChangeUpdate}
        />
      )
    }
  ];

  state = {
    user: {},
    registerData: {},
    loginData: {},
    updateData: {}
  };

  register = async () => {
    try {
      const datos = this.state.registerData;
      const { data } = await axios.post(`${env.API_URL}/register-user`, datos);
      if (data && data.success) {
        const { user, token } = data;
        const cookie = new Cookies();
        cookie.set(`${env.KEY}`, token, {
          expires: new Date(Date.now() + 1000 * 3600 * 2)
        });
        const state = { ...this.state, user };
        this.setState(state);
        this.props.history.push("/app/dashboard");
      } else {
        // send some flash
      }
    } catch (err) {
      console.log(err);
    }
  };

  login = async () => {
    try {
      const datos = this.state.loginData;
      const { data } = await axios.post(`${env.API_URL}/login`, datos);
      if (data && data.success) {
        const { user, token } = data;
        const cookie = new Cookies();
        cookie.set(`${env.KEY}`, token, {
          expires: new Date(Date.now() + 1000 * 3600 * 2)
        });
        const state = { ...this.state, user };
        this.setState(state);
        this.props.history.push("/app/dashboard");
      } else {
        // Send some flash
      }
    } catch (err) {
      console.log(err);
    }
  };

  logout = async () => {
    const state = { ...this.state };
    const cookie = new Cookies();
    state.user = null;
    cookie.remove(env.KEY);
    this.setState(state);
    this.props.history.push("/");
  };

  updateUser = async () => {
    const datos = this.state.updateData;
    const { data } = await axios.post(`${env.API_URL}/update-user`, datos);
    if (data && data.success) {
      // All good, go the dashboard
    } else {
      // Send some flash
    }
  };

  onChangeRegister = e => {
    e.preventDefault();
    const state = {
      ...this.state,
      registerData: {
        ...this.state.registerData,
        [e.target.name]: e.target.value
      }
    };
    this.setState(state);
  };

  onChangeLogin = e => {
    e.preventDefault();
    const state = {
      ...this.state,
      loginData: {
        ...this.state.loginData,
        [e.target.name]: e.target.value
      }
    };
    this.setState(state);
  };

  onChangeUpdate = e => {
    e.preventDefault();
    const state = {
      ...this.state,
      updateData: {
        ...this.state.updateData,
        [e.target.name]: e.target.value
      }
    };
    this.setState(state);
  };

  render() {
    return (
      <>
        <Suspense fallback={<Loading />}>
          <Switch>
            {this.routes.map(({ path, exact, component }) =>
              path.includes("app") ? (
                <ProtectedRoute
                  path={path}
                  exact={exact}
                  component={component}
                  key={path}
                />
              ) : (
                <Route
                  path={path}
                  exact={exact}
                  component={component}
                  key={path}
                />
              )
            )}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default withRouter(App);
