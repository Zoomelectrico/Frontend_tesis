import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Media,
  DropdownItem
} from "reactstrap";

const NavbarAdmin = props => (
  <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
    <Container fluid>
      <Link
        className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
        to="/"
      >
        {props.brandName}
      </Link>
      <Nav className="align-items-center d-none d-md-flex" navbar>
        <UncontrolledDropdown nav>
          <DropdownToggle className="pr-0" nav>
            <Media className="align-items-center">
              <span className="avatar avatar-sm rounded-circle">
                <img
                  alt="..."
                  src={
                    props.user.img ||
                    require("../assets/img/user-placeholder.png")
                  }
                />
              </span>
              <Media className="ml-2 d-none d-lg-block">
                <span className="mb-0 text-sm font-weight-bold">
                  {`${props.user.firstName || "John"} ${props.user.lastName ||
                    "Snow"}`}
                </span>
              </Media>
            </Media>
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem className="noti-title" header tag="div">
              <h6 className="text-overflow m-0">Welcome!</h6>
            </DropdownItem>
            <DropdownItem to="/admin/user-profile" tag={Link}>
              <i className="ni ni-single-02" />
              <span>My profile</span>
            </DropdownItem>
            <DropdownItem to="/admin/user-profile" tag={Link}>
              <i className="ni ni-settings-gear-65" />
              <span>Settings</span>
            </DropdownItem>
            <DropdownItem to="/admin/user-profile" tag={Link}>
              <i className="ni ni-calendar-grid-58" />
              <span>Activity</span>
            </DropdownItem>
            <DropdownItem to="/admin/user-profile" tag={Link}>
              <i className="ni ni-support-16" />
              <span>Support</span>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
              <i className="ni ni-user-run" />
              <span>Logout</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default NavbarAdmin;
