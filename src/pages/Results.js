import React from "react";
import { Navbar, Footer } from "../components";
class Results extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar login={this.props.user.login} />
        <div className="container">
          <h2>Results</h2>
        </div>
        <Footer />
      </>
    );
  }
}

export default Results;
