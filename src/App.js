import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Dashboard, Home, NotFound } from "./pages";

class App extends React.Component {
  routes = [
    {
      path: "/",
      exact: true,
      component: props => <Home {...props} />
    },
    {
      path: "/app/dashboard",
      exact: true,
      component: props => <Dashboard {...props} />
    },
    {
      path: "/auth/register",
      exact: true,
      component: props => <Dashboard {...props} />
    },
    {
      path: "/auth/login",
      exact: true,
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
        </>
      </Router>
    );
  }
}

export default App;
