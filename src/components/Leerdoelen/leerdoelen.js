import React from "react";
import {Carousel, CarouselItem, Col, Nav, Row} from "react-bootstrap";

import "./leerdoelen.css";
import Manage from "../leerdoelComponents/manage/manage";
import {Advise} from "../leerdoelComponents/advise/advise";
import {ZelfStandig} from "../leerdoelComponents/pro-skills/self-work/work";
import {Feedback} from "../leerdoelComponents/pro-skills/feedback/feedback";
import {Quality} from "../leerdoelComponents/realise/quality/quality";
import {CICD} from "../leerdoelComponents/realise/continiuous-integration/ci-cd";
import {Ontwerpen} from "../leerdoelComponents/design/ui/ui";
import ReadCode from "../leerdoelComponents/analyse/read-code/readPullRequest";
import Problem from "../leerdoelComponents/analyse/problem/analyseProblem";
import {Flowchart} from "../leerdoelComponents/design/flowchart/flowchart";

const Leerdoelen = () => {

    return (
        <Row>
            <Col
                sm={12}
                lg={3}
            >
                <Nav variant="pills" className="flex-column leerdoel-navigation" defaultActiveKey="manage">
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
                <Carousel id={"leerdoelen"} interval={null} controls={false} indicators={false} slide={false} touch={false}>
                    <CarouselItem>
                        <Manage/>
                    </CarouselItem>
                    <CarouselItem>
                        <ReadCode/>
                        <br/>
                        <Problem/>
                    </CarouselItem>
                    <CarouselItem>
                        <Advise/>
                    </CarouselItem>
                    <CarouselItem>
                        <Ontwerpen/>
                        <br/>
                        <Flowchart/>
                    </CarouselItem>
                    <CarouselItem>
                        <Quality/>
                        <br/>
                        <CICD/>
                    </CarouselItem>
                    <CarouselItem>
                        <Feedback/>
                        <br/>
                        <ZelfStandig/>
                    </CarouselItem>
                </Carousel>
            </Col>
        </Row>
    )
}
export default Leerdoelen
