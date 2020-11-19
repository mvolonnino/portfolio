import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import Avatar from "@material-ui/core/Avatar";

import "./Navbar.css";

function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  console.log({ collapsed });

  const handleTogglerClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <MDBNavbar
      color="info-color"
      dark
      expand="md"
      fixed="top"
      scrolling
      transparent
    >
      <MDBNavbarBrand>
        <Avatar />
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={handleTogglerClick} />
      <MDBCollapse isOpen={collapsed} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>Matt Volonnino</MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>Contact Me</MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default Navbar;
