import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Footer, NavTabs } from "../components";
import {
  FacultyCouncil,
  SchoolCouncil,
  StudentCenter,
  StudentCenterFederation
} from "../components/postulation";
const routes = [
  {
    path: "/postulate/faculty-council",
    name: "Consejo de Facultad",
    Component: props => <FacultyCouncil {...props} />
  },
  {
    path: "/postulate/school-council",
    name: "Consejo de Escuela",
    Component: props => <SchoolCouncil {...props} />
  },
  {
    path: "/postulate/student-center",
    name: "Centro de Estudiantes",
    Component: props => <StudentCenter {...props} />
  },
  {
    path: "/postulate/student-center-federation",
    name: "Federacion de Centro de Estudiantes",
    Component: props => <StudentCenterFederation {...props} />
  }
];

class Postulate extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar login={this.props.user.login} logout={this.props.logout} />
        <div className="container">
          <Router>
            <>
              <NavTabs links={routes} />
              {routes.map(({ path, name, Component }) => (
                <Route key={name} path={path} component={Component} />
              ))}
            </>
          </Router>
        </div>
        <Footer />
      </>
    );
  }
}

export default Postulate;
