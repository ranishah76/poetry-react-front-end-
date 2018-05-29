import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';

export default class Navigation extends Component {

render(){
  return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Shakespeare</a>
          </Navbar.Brand>
        </Navbar.Header>

          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
      </Navbar>
    )
  }
}
