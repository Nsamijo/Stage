import React from "react";
import {Carousel, CarouselItem, Col, Nav, Row} from "react-bootstrap";

import "./leerdoelen.css";


const Leerdoelen = () => {
    return (
        <Row>
            <Col sm={12} lg={3}>
                <Nav variant="pills" className="flex-column" defaultActiveKey="manage">
                    <Nav.Item>
                        <Nav.Link eventKey="manage" href="#leerdoelen" data-slide-to="0">Manage and Control</Nav.Link>
                    </Nav.Item>
                    <Nav.Item  >
                        <Nav.Link eventKey="analyse" href="#leerdoelen" data-slide-to="1">Analyseren</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="advies" href="#leerdoelen"  data-slide-to="2">Adviseren</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="ontwerp" href="#leerdoelen"  data-slide-to="3">Ontwerpen</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="realise" href="#leerdoelen"  data-slide-to="4">Realiseren</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="skills" href="#leerdoelen"  data-slide-to="5">Professional Skills</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={12} lg={9}>
                <Carousel id="leerdoelen" interval={null} controls={false} indicators={false}>
                        <CarouselItem>
                            <span>
                                Hello World
                            </span>
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block w-100" src="..." alt="Second slide"/>
                        </CarouselItem>
                        <CarouselItem>
                            <img className="d-block w-100" src="..." alt="Third slide"/>
                        </CarouselItem>
                    <CarouselItem>
                            <span>
                                Hello World
                            </span>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-100" src="..." alt="Second slide"/>
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-100" src="..." alt="Third slide"/>
                    </CarouselItem>
                </Carousel>
            </Col>
        </Row>
    )
}

export default Leerdoelen