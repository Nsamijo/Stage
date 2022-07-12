import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import {Leerdoel3} from "../../_documentation/analyse/leerdoel3/leerdoel3";
import {DynamischAfprijzen, Probleemstelling} from "../_docs/defenitions";
import {analyse} from "../../../../constants/content";

const Problem = () => {
    return (
        <Container>
            <Row>
                <h2>Leerdoel</h2>
                <div className="leerdoel">
                    {analyse.leerdoel2}
                </div>
            </Row>
            <Row>
                <p>
                    <h5>Analyseren</h5>
                    <p>
                        Dit leerdoel gaat over het analyseren van processen, producten en informatiestromen in hun onderlinge samenhang en context.
                    </p>
                </p>
                <p>
                    Bij dit leerdoel is er gekozen om de probleemanalyse van Tech Labs te beheersen. Deze probleemanalyse is gezamelijk uitgevoerd met mede-stagaires onder begeleiding vanuit AH Tech Labs en bevat enkele individuele aspecten.
                </p>
                <p>
                    De uitwerkmethode is voor de probleemanalyse ontvangen van een stagebegeleider. Zowel de probleemstelling als informatie over Dynamisch Afprijzen is ontvangen van een AH stakeholder.
                </p>
                <p>
                    <h5>Probleem Context</h5>
                    Albert Heijn wil het percentage aan voedselverspilling met 20 procent verlaagd hebben in het jaar 2030. Eén van de intiatieven is Dynamisch Afprijzen. Bij AH Tech Labs kwam hiervoor de volgende probleemstelling binnen:
                </p>
                <p>
                    <Probleemstelling/>
                </p>
                <p>
                    Het team heeft de volgende informatie ontvangen over Dynamisch Afprijzen
                </p>
                <p>
                    <DynamischAfprijzen/>
                </p>
                <p>
                    <h5>Leerdoel Bewijs</h5>
                    <p>
                        Om dit leerdoel te behalen is er meegedaan aan de probleemanalyses van de stageopdrachten. Van deze is er 1 gedocumenteerd. In de documentatie is een probleemanalyse met bijbehorende conclusies van zowel het individuele en gezamelijke gedeelte.
                    </p>
                </p>
            </Row>
            <Row>
                <Row>
                    <h5>Documentatie</h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Probleemuitwerking en Resultaat
                            </Accordion.Header>
                            <Accordion.Body>
                                <Leerdoel3/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Row>
            <br/>
            <Row>
                <h5>Feedback en Reflectie</h5>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Feedback en Reflectie
                        </Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <br/>
        </Container>
    )
}

export default Problem;