import React from "react";
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";

class Navigation extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Portfolio Nathan K. Samijo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <NavDropdown title="Leerdoelen" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Manage en Control</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Analyseren</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Adviseren</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Realiseren</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Professional Skills</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;