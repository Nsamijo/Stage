import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import {Actions, CI} from "../_docs/definitions";
import {CICDDocs} from "../_docs/documentation";
import {feedback, realise} from "../../../../constants/content";

export const CICD = () => {
    return (
        <Container>
            <Row>
                <h2>Leerdoel: Realiseren</h2>
                <div className="leerdoel">
                    {realise.leerdoel2}
                </div>
            </Row>
            <Row>
                <p>
                    Dit leerdoel gaat over het realiseren van een (deel van een) ICT-systeem op basis van een ontwerp.
                </p>
                <p>
                    Tijdens de stage heb ik kennis gemaakt met Continuous Integration/Continiuous Deployment.
                </p>
                <p>
                    <CI/>
                </p>
                <p>
                    In AH Tech Labs wordt <a target={"new"} href={"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"}>Github Actions</a> gebruikt voor Continuous Integration en Continuous Deployment.
                </p>
                <p>
                    <Actions/>
                </p>
                <p>
                    <h5>Leerdoel Documentatie</h5>
                    <p>
                        Gekeken is naar hoe CI/CD binnen in AH Tech Labs gebruikt wordt. Tijdens de stage is het CI/CD proces van AH Tech Labs gebruikt om de gemaakte code te intergreren en deployen (online zetten).
                    </p>
                    <p>
                        Voor de documentatie is er een foto gemaakt van de CI/CD processen en gedocumenteerd.
                    </p>
                </p>
            </Row>
            <Row>
                <h5>Documentatie</h5>
                <Accordion>
                    <Accordion.Item eventKey={"0"}>
                        <Accordion.Header>
                            Continious Integration and Continious Development Documentatie
                        </Accordion.Header>
                        <Accordion.Body>
                            <CICDDocs/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
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
                            <Row>
                                <h5>Feedback Stagebegeleider</h5>
                                <div className={"leerdoel"}>
                                    {feedback.leerdoel8}
                                </div>
                            </Row>
                            <Row>
                                <p>
                                    Er is gekozen om aan dit leerdoel te werken om een nieuw techniek te leren. Tijdens de eerste twee studiejaren op de Hogeschool Rotterdam zijn de termen Continuous Integration/Continuous Deployment vaak opgekomen in discussies. Ik wilde graag weten wat die inhield en hoe dit gebeurde.
                                </p>
                                <p>
                                    Door te werken aan dit leerdoel weet ik nu meer over wat CI/CD inhoud en kan ik dit nu toepassen op andere projecten. Tijdens de stage had ik pas later door dat ik al CI/CD deed omdat dit om een goed maar subtiele manier is verwerkt in AH Tech Labs.
                                </p>
                                <p>
                                    Voor dit leerdoel heb ik gedaan:
                                    <ul>
                                        <li>
                                            De begrippen CI/CD doorgenomen. Verschillen en overeenkomsten doorgenomen
                                        </li>
                                        <li>
                                            CI/CD gebruikt voor het live zetten van een applicatie
                                        </li>
                                    </ul>
                                    Deze inzet beoordeel ik als voldoende.
                                </p>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <br/>
        </Container>
    );
}