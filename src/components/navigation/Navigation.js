import React from "react";
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";

class Navigation extends React.Component {
    render() {
        return (
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
                            <Nav.Link href="/Stage/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;