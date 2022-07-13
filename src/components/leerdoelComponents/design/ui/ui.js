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
                    Dit leerdoel zal gaan over het ontwerpen van (een deel van) software op basis van specificaties.
                </p>
                <p>
                    Voor LDO1 is er gebruikt gemaakt van de online tool: wireframes.cc.
                </p>
                <p>
                    <Wireframe/>
                </p>
                <p>
                    De keuze is gedaan om de volgende redenen:
                    <ul>
                        <li>Laat toe simpele gebruikersinterfaces te ontwerpen</li>
                        <li>Door een Link optie is het mogeljk om een website met meerdere paginas te simuleren</li>
                        <li>Ontwerptijd te verminderen: in het team was er een UI-stagaire aanwezig die verantwoordelijk was voor het maken van de gebruikers interface</li>
                    </ul>
                </p>
                <p>
                    <h5>Leerdoel Bewijs</h5>
                    Om dit leerdoel te behalen is er voor de Digitale Koopjeshoek een gebruikersinterface ontworpen. Dit ontwerp neemt de eisen en adviesen mee van de vorige leerdoelen (Analyseren en Adviseren).
                </p>
                <p>

                    In het bewijs is LDO2 verwerkt. Met LDO2 motiveer ik de look en feel van de gebruikersinterface. Voor de duidelijkheid zal dit aangegeven worden met <strong>[LDO2]</strong>
                </p>
            </Row>
            <Row>
                <h5>Documentatie</h5>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Gebruikersinterface Ontwerp en Motivatie
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
                                    Door te werken aan dit leerdoel wilde ik leren hoe een goed gebruikersomgeving te ontwerpen.
                                </p>
                                <p>
                                    Dit doel heb ik naar mijn gevoel niet bereikt. De ontwerpen die zijn gemaakt zijn niet in dezelfde omgeving gemaakt als de UX-designers. Ook zijn deze van een lager kwaliteit.
                                    <p>
                                        Tijdens de stage heb ik als ontwikkelaar wel mijn mening en advies geuit over het ontwerp dat de UX-designer had. Helaas mocht ikzelf de veranderingen niet toepassen
                                    </p>
                                </p>
                                <p>
                                    De gebruikersomgeving heb ik niet getoond aan de UX-designers. Hierdoor heb ik mijn ontwerpskills niet kunnen verbeteren. Dit leerdoel beoordeel ik als onvoldoende.
                                </p>
                                <p>
                                    Door dit alles heb ik naar mijn mening geen vorderingen kunnen maken. Dit leerdoel heb ik daarom niet afgerond. Voor de volgende keer zal ik de verantwoordelijk voor ontwerpen op me nemen of vragen. Indien dit niet mogelijk is zal ik kijken of er een comprimie gevonden kan worden.
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
                                    Door te werken aan dit leerdoel wilde ik mijn ontwerpkeuzes kunnen motiveren aan anderen.
                                </p>
                                <p>
                                    Dit doel heb ik naar mijn gevoel niet bereikt. De ontwerpen heb ik niet kunnen bespreken met de UX-designer. Hierdoor kon ik de motivaties niet uitten.
                                </p>
                                <p>
                                    De gebruikersomgeving heb ik niet getoond aan de UX-designers. Hierdoor heb ik mijn ontwerpen niet kunnene motiveren. Dit leerdoel beoordeel ik als onvoldoende.
                                    <p>
                                        Wel heb ik als stagair het zeggen gehad over de gemaakte ontwerpen. En heb ik ook veranderingen kunnen aanvragen en/of kunnen voorstellen
                                    </p>
                                </p>
                                <p>
                                    Naar mijn mening heb ik geen vorderingen kunnen maken. Dit leerdoel heb ik daarom niet afgerond. Voor de volgende keer zal ik de verantwoordelijk voor ontwerpen op me nemen of vragen. Indien dit niet mogelijk is zal ik kijken of er een comprimie gevonden kan worden.
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
