import React from "react";
import { Navbar, Footer } from "../components";

const About = props => (
  <>
    <Navbar login={props.user.login} logout={props.logout} />
    <div className="container has-text-centered padder">
      <h2 className="title">Lorem ipsum dolor sit.</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rem illum
        reiciendis harum consequatur optio quasi sit eius quod, rerum quae
        consectetur voluptatem eveniet nesciunt quidem iste aliquam eos libero
        quibusdam tenetur saepe repudiandae ut soluta laboriosam! Quasi, dolore
        qui?
      </p>
    </div>
    <Footer />
  </>
);

export default About;
