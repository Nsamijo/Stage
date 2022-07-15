import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import "../../../Leerdoelen/leerdoel.css";
import {Wireframe} from "../_docs/definitions";
import {Design} from "../_docs/documentations";
import {feedback} from "../../../../constants/content";

export const Ontwerpen = () => {
    return (
        <Container>
            <Row>
                <p>
                    <h2>Leerdoel: Ontwerpen</h2>
                    <div className="leerdoel">
                        <h3>Leerdoel Ontwerpen 1</h3>
                        Ik wil na mijn stage instaat zijn om de gebruikersinterface van een applicatie te ontwerpen
                    </div>
                    <div className="leerdoel">
                        <h3>Leerdoel Ontwerpen 2</h3>
                        Ik wil na mijn stage instaat zijn om ontwerpkeuzes te motiveren/verduidelijken
                    </div>

                    <p>
                        Dit onderwerp bevat 2 leerdoelen. Door de samenhang van deze leerdoelen is er gekozen om de documentatie te combineren. De volgende afkortingen LDO1 en LDO2 zullen in de rest van de tekst gebruikt worden bovengenoemde leerdoelen te benoemen.
                    </p>
                </p>
                <p>
                    <h5>Leerdoel</h5>
                    Dit leerdoel zal gaan over het ontwerpen van (een deel van de) software op basis van specificaties.
                </p>
                <p>
                    Voor LDO1 is er gebruikt gemaakt van de online tool: wireframes.cc.
                </p>
                <p>
                    <Wireframe/>
                </p>
                <p>
                    De keuze  voor Wireframes is gedaan om de volgende redenen:
                    <ul>
                        <li>Wireframes stelt je instaat simpele gebruikersomgevingen te ontwerpen</li>
                        <li>Door de Link optie is het mogeljk om een website met meerdere pagina's te simuleren</li>
                        <li>Bied mogelijkheden om in korte tijd een gebruikeromgeving ontwerp te ontwikkelen. Een voorbeeld hiervan heb ik gezien bij de UI-stagaire die verantwoordelijk was voor het maken van de gebruikersomgevingen</li>
                    </ul>
                </p>
                <p>
                    <h5>Documentatie Omschrijving</h5>
                    Om dit leerdoel te behalen is er voor de Digitale Koopjeshoek een gebruikersomgeving ontworpen. Bij het ontwikkelen van de omgeving is gebruik gemaakt van de eisen en adviezen van de vorige leerdoelen
                </p>
                <p>

                    In het bewijs is LDO2 verwerkt. Met LDO2 motiveer ik de look en feel van de gebruikersomgeving. Voor de duidelijkheid zal dit aangegeven worden met <strong>[LDO2]</strong>
                </p>
            </Row>
            <Row>
                <h5>Documentatie</h5>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Gebruikersomgeving Ontwerp en Motivatie
                        </Accordion.Header>
                        <Accordion.Body>
                            <Design/>
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
                                <h5>Feedback Stagebegeleider LD01</h5>
                                <div className={"leerdoel"}>
                                    {feedback.leerdoel5}
                                </div>
                            </Row>
                            <Row>
                                <h5>Reflectie</h5>
                                <p>
                                    Door te werken aan dit leerdoel wilde ik leren hoe een goed gebruikersomgeving ontworpen moet worden.
                                </p>
                                <p>
                                    Dit leerdoel is naar mijn mening tijdens de stage onvoldoende aan bod gekomen. Mijn aandachtsgebied was voornamelijk gericht op applicatieontwikkeling.
                                    <p>
                                        Tijdens de stage heb ik als ontwikkelaar wel mijn mening en advies gegeven over het ontwerp dat de UX-designer had.
                                    </p>
                                </p>
                                <p>
                                    Door dit alles heb ik naar mijn mening geen vorderingen kunnen maken. Dit leerdoel heb ik daarom niet naar tevredenheid afgerond.
                                </p>
                            </Row>
                            <Row>
                                <h5>Feedback Stagebegeleider LD02</h5>
                                <div className={"leerdoel"}>
                                    {feedback.leerdoel6}
                                </div>
                            </Row>
                            <Row>
                                <h5>Reflectie</h5>
                                <p>
                                    Door te werken aan dit leerdoel wilde ik mijn ontwerpkeuzes kunnen motiveren.
                                </p>
                                <p>
                                    Tijdens mijn stage heb ik op verschillende momenten ontwerpkeuzes van de UX-designers besproken. Hierbij adviseerde en motiveerde ik veranderingen die voldeden aan de standaard van Albert Heijn.
                                </p>
                                <p>
                                    De ontwikkeling die ik heb gemaakt is; het kunnen motiveren en adviseren van ontwerpkeuzes aan UX-designers, waarbij rekening wordt gehouden dat de ontwerpkeuzes moeten voldoen aan de bedrijfseisen.
                                </p>
                                <p>
                                    Als ik tijdens mijn stage mijn ontwerpkeuzes had mogen motiveren en verduidelijken had ik dit leerdoel naar tevredenheid afgerond.
                                </p>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <br/>
        </Container>
    )
}
