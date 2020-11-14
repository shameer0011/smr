import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Dropdown,
  Form,
  Collapse,
} from "bootstrap-4-react";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const layout = () => {
  return (
    <Router>
      <div>
        <Navbar expand="lg" light bg="light">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggler target="#navbarSupportedContent" />
          <Collapse navbar id="navbarSupportedContent">
            <Navbar.Nav mr="auto">
              <Nav.Item active>
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/about">About</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/contact">Contact</Link>
              </Nav.Item>
            </Navbar.Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default layout;
