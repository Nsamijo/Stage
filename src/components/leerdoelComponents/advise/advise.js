import {Accordion, Container, Row} from "react-bootstrap";
import React from 'react';

import {Leerdoel4} from "../_documentation/advise/advise";
import {Advies} from "./_docs/documentation";
import {advice, feedback} from "../../../constants/content";

export const Advise = () => {
    return (
        <Container>
            <Row>
                <h2>Leerdoel: Adviseren</h2>
                <div className="leerdoel">
                    {advice.leerdoel}
                </div>
            </Row>
            <Row>
                <p>
                    <p>
                        Dit leerdoel gaat over het adviseren van de inrichting van processen en/of informatie voor een
                        nieuw te ontwikkelen, aan te schaffen of aan te passen bestaand ICT-systeem.
                    </p>
                </p>
                <p>
                    <h5>Leerdoel Context</h5>
                    <p>
                        Dit leerdoel gaat over het kunnen adviseren van functionaliteiten. Voornamelijk adviseren van
                        functionaliteiten voor ontwikkeling. De adviezen die zijn uitgebracht vonden plaats tijdens:
                        <ul>
                            <li>
                                Probleemanalyses
                            </li>
                            <li>
                                Het opstellen van projectplannen
                            </li>
                            <li>
                                Het opstellen van kwaliteitseisen voor functionaliteiten
                            </li>
                            <li>
                                Het ontwerpen van de gebruikersomgeving. Deze adviezen zijn gegeven aan de UX-designer
                                en niet zelf geimplementeerd.
                            </li>
                        </ul>
                        probleemanalyses en het opstellen van projectplannen.
                    </p>
                </p>
                <p>
                    Tijdens de stage zijn er verschillende momenten geweest waarop ik adviezen heb uitgebracht. De
                    adviezen die aansluiten bij dit leerdoel vonden plaats tijdens de probleemanalyse. De adviezen
                    hebben betrekking op de functionaliteit van de te ontwikkelen software.
                </p>
                <p>
                    Om de leerdoel beter te begrijpen is eerst gekeken naar de betekenis van het woord advies.
                </p>
                <p>
                    <Advies/>
                </p>
                <p>
                    Voor het komen op adviezen ben ik in gesprek gegaan met derden en andere mede-stagaires.
                </p>
            </Row>
            <Row>
                <Row>
                    <h5>Documentatie</h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Advies over Functionaliteit
                            </Accordion.Header>
                            <Accordion.Body>
                                <Leerdoel4/>
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
                            <Row>
                                <h5>Feedback Stagebegeleider</h5>
                                <div className={"leerdoel"}>
                                    {feedback.leerdoel4}
                                </div>
                            </Row>
                            <Row>
                                <h5>Reflectie</h5>
                                <p>
                                    Door te werken aan dit leerdoel wilde ik leren om te durven mijn mening, omtrent
                                    potentiele functionaliteiten, te geven.
                                </p>
                                <p>
                                    De adviezen die zijn gedaan kwamen voor grotendeels overeen met die van
                                    mede-stagaires. Op basis van gesprekken met derden over de stageopdrachten zijn er
                                    adviezen tot stand gekomen die ik kon bespreken met mijn mede-stagaires. De
                                    gesprekken met derden hebben mij geholpen in het discussieren en motiveren van
                                    functionaliteiten zoals ik die bedacht had.
                                </p>
                                <p>
                                    In het begin van mijn stageperiode heb ik me terughoudend opgesteld.
                                </p>
                                <p>
                                    Het bespreken van adviezen was wel effectief en leverde inzichten die ik kon delen
                                    met het team. Alleen gebeurde dit niet vaak genoeg in de beginperiode van mijn stage
                                    (door de passieve houding die ik had).
                                    <p>
                                        Bij nader inzien had ik het volgende anders moeten doen:
                                        <ul>
                                            <li>
                                                Actievere houding aannemen: meer mijn mening moeten geven
                                            </li>
                                        </ul>
                                    </p>
                                </p>
                                <p>
                                    De vordering die ik heb gemaakt:
                                    <ul>
                                        <li>
                                            Het discussieren van functionaliteiten met anderen
                                        </li>
                                    </ul>
                                    Deze vordering heeft me geholpen om beter te communiceren met mijn mede-stagaires en
                                    derden.
                                </p>
                                <p>
                                    Richting de toekomst neem ik mee het kunnen discussieren en motiveren. Ik zal in de
                                    toekomst aandacht moeten besteden en alert moeten zijn op het participeren in
                                    teamverband.
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