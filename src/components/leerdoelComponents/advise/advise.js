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
                        Dit leerdoel gaat over het adviseren van de inrichting van processen en/of informatie voor een nieuw te ontwikkelen, aan te schaffen of aan te passen bestaand ICT-systeem.
                    </p>
                </p>
                <p>
                    <h5>Leerdoel Context</h5>
                    <p>
                        Dit leerdoel gaat over het kunnen adviseren van functionaliteiten. Voornamelijk adviseren van functionaliteiten voor ontwikkeling. De adviezen die zijn uitgebracht vonden plaats tijdens:
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
                                Het ontwerpen van de gebruikersomgeving. Deze adviezen zijn gegeven aan de UX-designer en niet zelf geimplementeerd.
                            </li>
                        </ul>
                            probleemanalyses en het opstellen van projectplannen.
                    </p>
                </p>
                <p>
                    Tijdens de stage zijn er verschillende momenten geweest waarop ik adviezen heb uitgebracht. De adviezen die aansluiten bij dit leerdoel vonden plaats tijdens de probleemanalyse. De adviezen hebben betrekking op de functionaliteit van de te ontwikkelen software.
                </p>
                <p>
                    Om de leerdoel beter te begrijpen is eerst gekeken naar de betekenis van het woord advies.
                </p>
                <p>
                    <Advies/>
                </p>
                <p>
                    Voor het komen op adviezen ben ik in gesprek gegaan met mijn oom, <a target={"new"} href={"https://www.linkedin.com/in/carl-leysner-8039467/"}>Carl Leysner</a>, en andere mede-stagaires.
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
                                    Door te werken aan dit leerdoel wilde ik leren om te durven mijn mening, omtrent potentiele functionaliteiten, te geven aan anderen
                                </p>
                                <p>
                                    De adviezen die zijn gedaan kwamen voor grotendeels overeen met die van mede-stagaires. De adviezen die niet overkwamen heb ik besproken met mijn oom en dan mijn mede-stagaires. Hierdoor ben ik beter geworden in het discussieren en motiveren van functionaliteiten.
                                </p>
                                <p>
                                    Het geven van adviezen gebeurde niet vaak genoeg. En bij momenten waar ik een advies mocht en kon uitten koos ik vaak om dit niet te doen. Hierbij geef ik mezelf een matige beoordeling
                                </p>
                                <p>
                                    Het bespreken van adviezen was wel effectief en leverde inzichten die ik kon delen met het team. Alleen gebeurde dit niet vaak genoeg door de passieve houding die ik had.
                                    <p>
                                        Bij nader inzien had ik het volgende anders moeten doen:
                                        <ul>
                                            <li>
                                                Actievere houding aannemen: meer mijn mening moeten uitten
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
                                    Deze vordering heeft me geholpen om beter te communiceren met mijn mede-stagaires en familieleden. Daarom ben ik tevreden over deze bevordering.
                                </p>
                                <p>
                                    Richting te toekomst neem ik mee het kunnen discussieren. Dit kan in verschillende gevallen gebruikt worden. Enkele gevallen zijn bepalen van functionaliteiten, bespreken van meningen, etc.
                                </p>
                                <p>
                                    Bij een volgende stage zal ik een actievere houding aannemen en meer durven adviezen te geven.
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