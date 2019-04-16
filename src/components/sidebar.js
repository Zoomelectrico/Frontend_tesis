import React, { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

const activeRoute = (pathName, routeName) =>
  pathName.indexOf(routeName) > -1 ? "active" : "";

const toggleCollapse = (collapseOpen, setCollapseOpen) =>
  setCollapseOpen(!collapseOpen);

const closeCollapse = setCollapseOpen => setCollapseOpen(false);

const createLinks = (routes, setCollapseOpen) =>
  routes.map(link => (
    <NavItem key={link.name}>
      <NavLink
        to={link.path}
        tag={NavLinkRRD}
        onClick={() => closeCollapse(setCollapseOpen)}
        activeClassName="active"
      >
        <i className={link.icon} />
        {link.name}
      </NavLink>
    </NavItem>
  ));

const Sidebar = props => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const { routes, logo } = props;
  let navbarBrandProps;
  return (
    <Navbar className="navbar-vertical fixed-left navbar-light bg-white navbar navbar-expand-md">
      <Container fluid>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => toggleCollapse(collapseOpen, setCollapseOpen)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img alt={logo.alt} className="navbar-brand-img" src={logo.src} />
          </NavbarBrand>
        ) : null}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-label="navbar-default-dropdown-1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action 1</DropdownItem>
              <DropdownItem>Action 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Action 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="algin-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img alt="alt" src="" />
                </span>
              </Media>
            </DropdownToggle>
          </UncontrolledDropdown>
        </Nav>
        <Collapse navbar isOpen={collapseOpen}>
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  <Link to={logo.link}>
                    <img alt={logo.alt} src={logo.src} />
                  </Link>
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => toggleCollapse(collapseOpen, setCollapseOpen)}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>{createLinks(routes, setCollapseOpen)}</Nav>
          <hr className="my-3" />
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
