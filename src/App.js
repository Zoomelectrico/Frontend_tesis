import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppWrapper from "./AppWrapper";

class App extends React.Component {
  state = {};
  render() {
    return (
      <Router>
        <AppWrapper />
      </Router>
    );
  }
}

export default App;
