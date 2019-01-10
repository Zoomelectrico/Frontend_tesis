import React from "react";
import { Navbar, Footer } from "../components";

class Postulation extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h2>Postulation</h2>
        </div>
        <Footer />
      </>
    );
  }
}

export default Postulation;
