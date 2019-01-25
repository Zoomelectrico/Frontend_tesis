import React from "react";
import { Navbar, Footer } from "../components";
class Vote extends React.Component {
  render() {
    return (
      <>
        <Navbar login={this.props.user.login} logout={this.props.logout} />
        <div className="container">
          <h2 className="title">Vote</h2>
        </div>
        <Footer />
      </>
    );
  }
}

export default Vote;
