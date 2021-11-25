import React from "react";
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {BrowserRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import About from "../about/about";
import Home from "../home/Home";

class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/Stage">Portfolio Nathan K. Samijo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Leerdoelen" id="basic-nav-dropdown">
                                    <NavDropdown.Item to="#action/3.1">Manage en Control</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Analyseren</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Adviseren</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Realiseren</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Professional Skills</NavDropdown.Item>
                                </NavDropdown>
                                <NavLink to="/About" activeClassName="chosen">About</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route path="/" exact render={() => <Home/>}> </Route>
                    <Route path="/About" exact render={() => <About/>}> </Route>
                    <Route component={Home}> </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigation;