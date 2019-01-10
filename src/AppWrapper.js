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
  state = {};
  render() {
    return (
      <>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signin" component={SignIn} />
        <Route path="/documents" component={Documents} />
        <Route path="/postulation" component={Postulation} />
        <Route path="/results" component={Results} />
        <Route path="/dashboard" component={Dashboard} />
      </>
    );
  }
}

export default AppWrapper;
