import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

import Home from './components/Home';
import About from './components/About';
import Client from './components/Client';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          App BakeHouse
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
            <Nav.Link as={Link} to="/portfolio">
              Portfolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <main>
        <Switch>
          <Route exact path="/">
            <Home />
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
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
