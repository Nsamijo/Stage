import React from "react";
import {Carousel, CarouselItem, Col, Nav, Row} from "react-bootstrap";

import "./leerdoelen.css";
import LeerdoelItem from "./leerdoel-item";
import {advice, analyse, design, manage, realise, skills} from "../../constants/content";
import Manage from "../leerdoelComponents/manage/manage";

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
                <Carousel id="leerdoelen" interval={null} controls={false} indicators={false} slide={false}>
                        <CarouselItem>
                            <LeerdoelItem
                                bewijsComponent={<Manage/>}
                                beschrijving={manage.leerdoel}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <LeerdoelItem
                                beschrijving={analyse.leerdoel1}
                            />
                            <br/>
                            <LeerdoelItem
                                beschrijving={analyse.leerdoel2}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <LeerdoelItem
                                beschrijving={advice.leerdoel}
                            />
                        </CarouselItem>
                    <CarouselItem>
                        <LeerdoelItem
                            beschrijving={design.leerdoel1}
                        />
                        <br/>
                        <LeerdoelItem
                            beschrijving={design.leerdoel2}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <LeerdoelItem
                            beschrijving={realise.leerdoel1}
                        />
                        <br/>
                        <LeerdoelItem
                            beschrijving={realise.leerdoel2}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <LeerdoelItem
                            beschrijving={skills.leerdoel1}
                        />
                        <br/>
                        <LeerdoelItem
                            beschrijving={skills.leerdoel2}
                        />
                    </CarouselItem>
                </Carousel>
            </Col>
        </Row>
    )
}

export default Leerdoelen