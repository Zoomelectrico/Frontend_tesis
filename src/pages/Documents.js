import React from "react";
import { Navbar, Footer } from "../components";
const Documents = props => (
  <>
    <Navbar login={props.user.login} logout={props.logout} />
    <div className="container">
      <h2>Documents</h2>
    </div>
    <Footer />
  </>
);

export default Documents;
