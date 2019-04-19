import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import { env } from "../utils";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const cookie = new Cookies();
  const token = cookie.get(env.KEY);
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/auth/login" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
