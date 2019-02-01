import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar, Footer, NavTabs } from "../components";
import {
  FacultyCouncil,
  SchoolCouncil,
  StudentCenter,
  StudentCenterFederation,
  ResumeTable
} from "../components/postulation";
const routes = [
  {
    path: "/postulate",
    name: "Tabla Resumen",
    Component: props => <ResumeTable {...props} />
  },
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
              {routes.map(({ path, name, Component, exact }) => (
                <Route
                  key={name}
                  path={path}
                  component={Component}
                  exact={true}
                />
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
