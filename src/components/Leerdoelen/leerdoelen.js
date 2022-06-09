import React from "react";
import {Carousel, CarouselItem, Col, Nav, Row} from "react-bootstrap";

import "./leerdoelen.css";
import LeerdoelItem from "./leerdoel-item";
import {advice, analyse, manage, realise, skills} from "../../constants/content";
import Manage from "../leerdoelComponents/manage/manage";
import ReadCode from "../leerdoelComponents/analyse/read-code/read-code";
import Problem from "../leerdoelComponents/analyse/problem/problem";
import {Advise} from "../leerdoelComponents/advise/advise";
import {ZelfStandig} from "../leerdoelComponents/pro-skills/self-work/work";
import {Feedback} from "../leerdoelComponents/pro-skills/feedback/feedback";
import {Quality} from "../leerdoelComponents/realise/quality/quality";
import {CICD} from "../leerdoelComponents/realise/continiuous-integration/ci-cd";
import {Ontwerpen} from "../leerdoelComponents/design/ui/ui";

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
                    {/*<Nav.Item >
                        <Nav.Link eventKey="geheim" href="#leerdoelen"  data-slide-to="6">Stageovereenkomst*</Nav.Link>
                    </Nav.Item>*/}
                </Nav>
            </Col>
            <Col sm={12} lg={9}>
                <Carousel id="leerdoelen" interval={null} controls={false} indicators={false} slide={false} touch={false}>
                        <CarouselItem>
                            <LeerdoelItem
                                bewijsComponent={<Manage/>}
                                beschrijving={manage.leerdoel}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <LeerdoelItem
                                bewijsComponent={<ReadCode/>}
                                beschrijving={analyse.leerdoel1}
                            />
                            <br/>
                            <LeerdoelItem
                                bewijsComponent={<Problem/>}
                                beschrijving={analyse.leerdoel2}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <LeerdoelItem
                                bewijsComponent={<Advise/>}
                                beschrijving={advice.leerdoel}
                            />
                        </CarouselItem>
                    <CarouselItem>
                        <Ontwerpen/>
                    </CarouselItem>
                    <CarouselItem>
                        <LeerdoelItem
                            bewijsComponent={<Quality/>}
                            beschrijving={realise.leerdoel1}
                        />
                        <br/>
                        <LeerdoelItem
                            bewijsComponent={<CICD/>}
                            beschrijving={realise.leerdoel2}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <LeerdoelItem
                            bewijsComponent={<Feedback/>}
                            beschrijving={skills.leerdoel1}
                        />
                        <br/>
                        <LeerdoelItem
                            bewijsComponent={<ZelfStandig/>}
                            beschrijving={skills.leerdoel2}
                        />
                    </CarouselItem>
                    {/*<CarouselItem>*/}
                    {/*    <Container>*/}
                    {/*        Wegens geheimhoudingsovereenkomsten zullen bepaalde projecten/werkmethodes NIET/VAAG worden benadert. Alles in dit overzicht is gezet met uiterste goedkeuring van mijn Stagebegeleider: Leendert Ullersma*/}
                    {/*        <br/>*/}
                    {/*        <br/>*/}
                    {/*        Beschrijvingen die onder deze geheimhoudingsovereenkomsten zijn zullen worden voorzien van een **/}
                    {/*    </Container>*/}
                    {/*</CarouselItem>*/}
                </Carousel>
            </Col>
        </Row>
    )
}

export default Leerdoelen
