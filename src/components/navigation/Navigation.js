import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import {Link, Route} from "react-router-dom";
import Home from "../home/Home";
import About from "../about/about";

import "./navigation.css";
import Leerdoelen from "../Leerdoelen/leerdoelen";

class Navigation extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/Stage">Portfolio Nathan K. Samijo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav variant="tabs" className="me-auto">
                                <Nav.Link eventKey="/Stage-Informatie" activeClassName="chosen">
                                    <Link
                                        to="/Stage-Informatie"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'inherit',
                                            display: 'contents'
                                        }}
                                    >
                                        Stage Informatie
                                    </Link>
                                </Nav.Link>
                                <Nav.Link eventKey="/Leerdoelen" activeClassName="chosen">
                                    <Link
                                        to="/Leerdoelen"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'inherit',
                                            display: 'contents'
                                        }}
                                    >
                                        Leerdoelen
                                    </Link>
                                </Nav.Link>
                                <Nav.Link eventKey="/About" activeClassName="chosen">
                                    <Link
                                        to="/About"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'inherit',
                                            display: 'contents'
                                        }}
                                    >
                                        About
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="content">
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/Stage-Informatie">
                            <h1>Coming Soon</h1>
                        </Route>
                        <Route exact path="/Leerdoelen">
                            <Leerdoelen/>
                        </Route>
                        <Route exact path="/About">
                            <About/>
                        </Route>
                </Container>
            </>
        );
    }
}

export default Navigation;