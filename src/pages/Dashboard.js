import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { Sidebar, NavbarAdmin, FooterAdmin } from "../components";
import { DashHome, DashPostulate, DashProfile, DashVote } from "./dashboard";

const routes = [
  {
    name: "Home",
    path: "/app/dashboard",
    icon: "fab fa-amazon",
    exact: true,
    component: props => <DashHome {...props} />
  },
  {
    name: "Profile",
    path: "/app/dashboard/profile",
    icon: "fab fa-amazon",
    exact: true,
    component: props => <DashProfile {...props} />
  },
  {
    name: "Postulate",
    path: "/app/dashboard/postulate",
    icon: "fab fa-amazon",
    exact: true,
    component: props => <DashPostulate {...props} />
  },
  {
    name: "Vote",
    path: "/app/dashboard/vote",
    icon: "fab fa-amazon",
    exact: true,
    component: props => <DashVote {...props} />
  }
];

const getRoutes = routes =>
  routes.map(({ name, path, component, exact }) => (
    <Route key={name} to={path} component={component} exact={exact} />
  ));

const Dashboard = props => (
  <Router>
    <>
      <Sidebar
        {...props}
        bgColor=""
        routes={routes}
        logo={{ link: "/app/dashboard", src: "", alt: "logo" }}
      />
      <div className="main-content">
        <NavbarAdmin {...props} brandText="brand" />
        <Switch>{getRoutes(routes)}</Switch>
        <Container fluid>
          <FooterAdmin />
        </Container>
      </div>
    </>
  </Router>
);

export default Dashboard;
