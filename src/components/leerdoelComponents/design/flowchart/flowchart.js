import React from "react";
import {Accordion, Container, Row} from "react-bootstrap";

import {design} from "../../../../constants/content";
import "../../../Leerdoelen/leerdoel.css";
import {Flows} from "./docs";

export const Flowchart = () => {
    return (
        <Container>
            <Row>
                <p>
                    <h2>Leerdoel: Ontwerpen</h2>
                    <div className="leerdoel">
                        {design.leerdoel3}
                    </div>
                </p>
                <p>
                    <h5>Leerdoel Context</h5>
                    Voor dit leerdoel is er in opdracht van mijn stagebegeleider, W. Kleij, een stroomdiagram gemaakt van de Digitale Koopjeshoek. Met behulp van de procesvisualisatie wil ik de functie(s) van de Digitale Koopjeshoek verduidelijken.
                </p>
                <p>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header>
                                Stroomdiagram
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    <p>
                                        Een stroomdiagram is een diagram dat een proces, systeem of computeralgoritme weergeeft. Ze worden in meerdere vakgebieden gebruikt om vaak complexe processen te documenteren, bestuderen, plannen, verbeteren en communiceren, in duidelijke en gemakkelijk te begrijpen diagrammen <a href={'https://www.lucidchart.com/pages/nl/wat-is-een-stroomdiagram'}>(Wat is een stroomdiagram?, z.d.)</a>.
                                    </p>
                                    <p>
                                        Stroomdiagrammen gebruiken rechthoeken, ovalen, ruiten en nog veel meer vormen om het soort stap aan te geven - en pijlen om de stroom en volgorde te bepalen. Dit kan gaan van eenvoudige, handmatige schema's tot uitgebreide, computergetekende diagrammen met verschillende stappen en routes. Van alle verschillende diagrammen, is de stroomdiagram een van de meest gebruikte diagrammen ter wereld, zowel in technische als niet-technische vakgebieden <a href={'https://www.lucidchart.com/pages/nl/wat-is-een-stroomdiagram'}>(Wat is een stroomdiagram?, z.d.)</a>.
                                    </p>
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </p>
            </Row>
            <Row>
                <p>
                    <h5>Documentatie Omschrijving</h5>
                    <p>
                        Om dit leerdoel te behalen is er een stroomdiagram gemaakt van de Digitale Koopjeshoek.
                    </p>
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
                            <Flows/>
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
                            Reflectie
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Door te werken aan dit leerdoel wilde ik leren om processen/algoritmes van een applicatie te visualiseren.
                            </p>
                            <p>
                               Tijdens mijn stage heb ik me voornamelijk bezig gehouden met applicatieontwikkeling.
                            </p>
                            <p>
                                Er is op verschillende momenten uitleg gegeven over de processen. Dit werd gedaan om ons, als stagaires, een beeld te geven over de diverse applicaties. Het visualiseren van de algoritme werd gedaan als groep, maar voornamelijk door de UX-stagaires. Hierbij heb ik wel meegedacht, mijn mening en advies gegeven over de diverse handelingen die de gebruikers van de applicatie zouden kunnen uitvoeren.
                            </p>
                            <p>
                                De ontwikkeling die ik heb gemaakt is; het kunnen meedenken, motiveren en adviseren van de flow van de applicatie, waarbij rekening wordt gehouden met al bestaande processen van het bedrijf (Albert Heijn).
                            </p>
                            <p>
                                Ik heb naar mijn mening weinig  input kunnen leveren omdat de UX-designers op dit vlak het voor-touw namen. Wij als niet UX-designers werden slechts gevraagd of wij akkoord gingen met de flowchart. Ik had graag de mogelijheid gehad om hier meer ervaring in op te doen.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <br/>
            <br/>
        </Container>
    );
}