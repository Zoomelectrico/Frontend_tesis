import React from "react";
import { Navbar, Footer, Profile, Vote } from "../components";
class Dashboard extends React.Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <>
        <Navbar login={this.props.user.login} logout={this.props.logout} />
        <div className="container">
          <Profile user={this.props.user} />
        </div>
        <Footer />
      </>
    );
  }
}

export default Dashboard;
