import React from "react";
import {HashRouter as Router, Route, Link} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import About from "./components/about/about";
import Home from "./components/home/Home";

function App() {
    return (
        <Router>
            <div className="App">

                {/*Navigation*/}
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/Stage">Portfolio Nathan K. Samijo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Leerdoelen" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Manage en Control</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Analyseren</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Adviseren</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Realiseren</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Professional Skills</NavDropdown.Item>
                                </NavDropdown>
                                    <Nav.Link activeClassName="chosen">
                                        <Link
                                            to="/About"
                                        >
                                            About
                                        </Link>
                                    </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/*Navigation*/}
                <div className="Content">
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/About">
                        <About/>
                    </Route>
                </div>
            </div>
        </Router>
    )
}

export default App;