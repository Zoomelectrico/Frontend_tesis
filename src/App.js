import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from "./pages";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

class App extends React.Component {
  routes = [
    {
      path: "/",
      exact: true,
      component: props => <Home {...props} />
    },
    {
      path: "/auth/register",
      exact: true,
      component: props => <Register {...props} />
    },
    {
      path: "/auth/login",
      exact: true,
      component: props => <Login {...props} />
    },
    {
      path: "/app/dashboard",
      exact: false,
      component: props => <Dashboard {...props} />
    }
  ];

  state = {
    user: {},
    token: ""
  };

  render() {
    return (
      <Router>
        <>
          <Suspense fallback={<div>Loading...</div>}>
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
