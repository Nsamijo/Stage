import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./navigation.css";

class Navigation extends React.Component {
    render() {
        return (
            <Container
                className={'navigation'}
            >
                <Navbar fixed={'top'} bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/Stage">Portfolio Nathan K. Samijo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav variant="tabs" className="me-auto">
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
                                <Nav.Link eventKey="/Bijlage" activeClassName="chosen">
                                    <Link
                                        to="/Bijlage"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'inherit',
                                            display: 'contents'
                                        }}
                                    >
                                        Bijlage
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
                                        Algemene Informatie
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        );
    }
}

export default Navigation;