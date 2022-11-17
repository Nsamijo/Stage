import React from "react";
import {Accordion, Container, Row} from "react-bootstrap";

export const Flowchart = () => {
    return (
        <Container>
            <Row>
                <h2>Leerdoel: Ontwerpen</h2>

                <div className="leerdoel">
                    Ik wil na mijn stage instaat zijn om een stroomdiagram te maken van één of meerdere processen.
                </div>
            </Row>
            <Row>
                <h5>Leerdoel Context</h5>
                <p>
                    Voor dit leerdoel is er in opdracht van mijn stagebegeleider, W. Kleij, een stroomdiagram gemaakt van de Digitale Koopjeshoek. Met behulp van de procesvisualisatie wil ik de functie(s) van de Digitale Koopjeshoek verduidelijken.
                </p>
            </Row>
            <Row>
                <h5>Documentatie Omschrijving</h5>
                <p>
                    Om dit leerdoel te behalen is er een stroomdiagram (schematische voorstelling) gemaakt van de Digitale Koopjeshoek.
                </p>
            </Row>
            <Row>
                <h5>Documentatie</h5>
                <Accordion>
                    <Accordion.Item eventKey={"0"}>
                        <Accordion.Header>
                            Documentatie Flowchart
                        </Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <br/>
            <Row>
                <h5>Reflectie</h5>
                <Accordion>
                    <Accordion.Item eventKey={"0"}>
                        <Accordion.Header>
                            Feedback en Reflectie
                        </Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    );
}