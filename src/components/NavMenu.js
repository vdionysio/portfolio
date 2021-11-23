import React from 'react';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { scroller } from 'react-scroll';

export default function NavMenu() {
  return (
    <Navbar bg="myRed" variant="dark" fixed="top" expand="sm" collapseOnSelect={true}>
      <Navbar.Brand>
        <img src={logo} width="40px" height="40px" />
        Logo
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link
            href="#"
            onClick={() =>
              scroller.scrollTo('about', { smooth: true, offset: -70, duration: 500 })
            }>
            About
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={() =>
              scroller.scrollTo('skills', { smooth: true, offset: -70, duration: 500 })
            }>
            Skills
          </Nav.Link>
          <Nav.Link
            href="#"
            onClick={() =>
              scroller.scrollTo('works', { smooth: true, offset: -70, duration: 500 })
            }>
            Works
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
