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
                                    Er is gekozen om aan dit leerdoel te werken om een nieuwe technieken te leren. Tijdens de eerste twee studiejaren op de Hogeschool Rotterdam zijn de termen Continuous Integration/Continuous Deployment vaak genoemd in discussies. Ik wilde graag weten hoe het in de praktijk aan toe ging.
                                </p>
                                <p>
                                    Door te werken aan dit leerdoel weet ik nu wat CI/CD inhoud en hoe deze toe te passen bij andere projecten. Tijdens de stage kwam ik erachter dat ik al CI/CD deed omdat dit op subtiele manier is verwerkt in de methodiek waarmee er AH Tech Labs gewerkt wordt.
                                </p>
                                <p>
                                    De begrippen CI/CD opgezocht. Ik heb mij ook verdiept in de verschillen en overeenkomsten van CI/CD. Daarnaast heb ik CI/CD gebruikt bij het online plaatsen van een applicatie.
                                </p>
                                <p>
                                    Tijdens de stage heb ik bij elke stap meegekeken hoe het releasen van updates plaatsvondt (dus bij Continuous Deployment). Op een gegeven moment heb ik nieuwe updates gereleased.
                                    <p>
                                        Continuous Intergration werd bij elke Pull Request automatisch toegepast. Dit gebeurde bij de Github Actions die plaatsvonden bij zo een Pull Request. Maar ook het samenvoegen van code, Github Repository, valt onder Continuous Intergration.
                                    </p>
                                </p>
                                <p>
                                    Wat ik heb geleerd:
                                    <ul>
                                        <li>
                                            Meer kennis over CI/CD en hoe deze toegepast kan worden
                                        </li>
                                        <li>
                                            De tools die gebruikt kunnen worden voor CI/CD
                                        </li>
                                    </ul>
                                    Op basis van het geleerde ben ik instaat geweest om CI/CD te gebruiken bij het maken van dit verslag. Elke verandering wordt automatisch ingevoerd en live gezet. Ik ben tevreden over het eindproduct.
                                </p>
                                <p>
                                    Voor de toekomstige stage/werkplek neem ik de kennis en kunnen van CI/CD mee.
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