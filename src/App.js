import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { NotFound } from "./pages";
import { Loading } from "./components";
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
      component: props => <Home {...props} user={this.state.user} />
    },
    {
      path: "/auth/register",
      exact: true,
      component: props => (
        <Register
          {...props}
          register={this.register}
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
          updateUser={this.updateUser}
          onChangeUpdate={this.onChangeUpdate}
        />
      )
    }
  ];

  state = {
    user: {},
    token: "",
    registerData: {},
    loginData: {},
    updateData: {}
  };

  register = async () => {
    const datos = this.state.registerData;
    const { data } = await axios.post(`${env.API_URL}/register`, datos);
    if (data && data.success) {
      // All good, go to the dashboard
    } else {
      // send some flash
    }
  };

  login = async () => {
    const datos = this.state.loginData;
    const { data } = await axios.post(`${env.API_URL}/login`, datos);
    if (data && data.success) {
      // All good, go the dashboard
    } else {
      // Send some flash
    }
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
      <Router>
        <>
          <Suspense fallback={<Loading />}>
            <Switch>
              {this.routes.map(({ path, exact, component }) => (
                <Route
                  path={path}
                  exact={exact}
                  component={component}
                  key={path}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </>
      </Router>
    );
  }
}

export default App;
