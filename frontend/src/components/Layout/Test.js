
import React, { Component } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
//import logo from '../assets/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navExpanded: false
    };
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  setNavClose = () => {
    this.setState({ navExpanded: false });
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
        <Container>
          <Navbar.Brand>
              <Link to={"/"} className="navbar-brand">Hi</Link>
          </Navbar.Brand>          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" onClick={this.setNavClose}>
              <Link to={"/"} className="nav-link">Home</Link>
              <Link to={"/"} className="nav-link">Contact</Link>
            </Nav>          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}