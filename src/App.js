import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import About from './components/pages/About';
import Client from './components/pages/Client';
import Services from './components/pages/Services';
import Footer from './Footer';

import './App.css';
import imagePath from './logo.png';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <a href="#">
            <img src={imagePath} weign="40" height="40" />
            &nbsp;&nbsp;APP BAKEHOUSE
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/client">
              Client
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <main>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/client">
            <Client />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </main>

      <NavItem>
        <Footer />
      </NavItem>
    </Router>
  );
};

export default App;
