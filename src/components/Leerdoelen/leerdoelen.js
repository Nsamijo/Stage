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
            <br/>
            <Col
                sm={12}
                lg={3}
            >
                <Nav variant="pills" className="flex-column leerdoel-navigation" defaultActiveKey="manage">
                    <Nav.Item>
                        <Nav.Link eventKey="manage" href="#leerdoelen" data-slide-to="0">Leerdoel 1: Manage and Control</Nav.Link>
                    </Nav.Item>
                    <Nav.Item  >
                        <Nav.Link eventKey="analyse" href="#leerdoelen" data-slide-to="1">Leerdoel 2: Analyseren</Nav.Link>
                    </Nav.Item>
                    <Nav.Item  >
                        <Nav.Link eventKey="analyse2" href="#leerdoelen" data-slide-to="2">Leerdoel 3: Analyseren</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="advies" href="#leerdoelen"  data-slide-to="3">Leerdoel 4: Adviseren</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="ontwerp" href="#leerdoelen"  data-slide-to="4">Leerdoel 5: Ontwerpen</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="ontwerp2" href="#leerdoelen"  data-slide-to="5">Leerdoel 6: Ontwerpen</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="realise" href="#leerdoelen"  data-slide-to="6">Leerdoel 7: Realiseren</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="realise2" href="#leerdoelen"  data-slide-to="7">Leerdoel 8: Realiseren</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="skills" href="#leerdoelen"  data-slide-to="8">Leerdoel 9: Professional Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="skills2" href="#leerdoelen"  data-slide-to="9">Leerdoel 10: Professional Skills</Nav.Link>
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
                    </CarouselItem>
                    <CarouselItem>
                        <Problem/>
                    </CarouselItem>
                    <CarouselItem>
                        <Advise/>
                    </CarouselItem>
                    <CarouselItem>
                        <Ontwerpen/>
                    </CarouselItem>
                    <CarouselItem>
                        <Flowchart/>
                    </CarouselItem>
                    <CarouselItem>
                        <Quality/>
                    </CarouselItem>
                    <CarouselItem>
                        <CICD/>
                    </CarouselItem>
                    <CarouselItem>
                        <Feedback/>
                    </CarouselItem>
                    <CarouselItem>
                        <ZelfStandig/>
                    </CarouselItem>
                </Carousel>
            </Col>
        </Row>
    )
}
export default Leerdoelen
