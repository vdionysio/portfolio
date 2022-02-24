import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { scroller } from 'react-scroll';
import { BsCodeSlash } from 'react-icons/bs';

export default function NavMenu() {
  return (
    <Navbar
      className="navbar font-400"
      bg="myRed"
      variant="dark"
      fixed="top"
      expand="sm"
      collapseOnSelect={true}>
      <Navbar.Brand
        className="nav-brand"
        href="#"
        onClick={() =>
          scroller.scrollTo('main-header', { smooth: true, offset: -70, duration: 500 })
        }>
        <BsCodeSlash />
        Vinícius Dionysio
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link
            href="#"
            className="nav-links"
            onClick={() =>
              scroller.scrollTo('about', { smooth: true, offset: -70, duration: 500 })
            }>
            About
          </Nav.Link>
          <Nav.Link
            href="#"
            className="nav-links"
            onClick={() =>
              scroller.scrollTo('skills', { smooth: true, offset: -70, duration: 500 })
            }>
            Skills
          </Nav.Link>
          <Nav.Link
            href="#"
            className="nav-links"
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
