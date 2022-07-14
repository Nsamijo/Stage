import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";

import {Leerdoel3} from "../../_documentation/analyse/leerdoel3/leerdoel3";
import {DynamischAfprijzen, Probleemstelling} from "../_docs/defenitions";
import {analyse, feedback} from "../../../../constants/content";

const Problem = () => {
    return (
        <Container>
            <Row>
                <h2>Leerdoel: Analyseren</h2>
                <div className="leerdoel">
                    {analyse.leerdoel2}
                </div>
            </Row>
            <Row>
                <p>
                    <h5>Leerdoel Context</h5>
                    <p>
                        Voor dit leerdoel is er gebruik gemaakt van de probleemanalyses die zijn opgesteld op basis van de opdrachten die wij ontvingen van afdelingen of stakeholders. Bij de probleemanalyse wordt er gekeken naar bestaande oplossingen en hoe die ingezet kunnen worden om de doelstellingen van de afdelingen of stakeholders kan realiseren (het niet opnieuw uitvinden van de wiel). Door bestaande oplossingen te bestuderen wordt de ontwikkeltijd verkort en worden mogelijke valkuilen voorkomen.
                    </p>
                </p>
                <p>
                    Wat ik heb geleerd is hoe een probleem geanalyseerd wordt door de medewerkers van AH Tech Labs. Ik heb problemen geanalyseerd met mede-stagaires onder begeleiding van medewerkers van AH Tech Labs.
                </p>
                <p>
                    Hoe er binnen AH Tech Labs probleemanalyse vorm wordt gegeven is ons uitgelegd door een stagebegeleider. Voor het specifieke project Dynamisch Afprijzen hebben we de probleemstelling en additionele informatie ontvangen van een AH stakeholder.
                </p>
                <p>
                    <h5>Opdrachtformulering</h5>
                    Albert Heijn wil het percentage aan voedselverspilling met 20 procent verlaagd hebben in het jaar 2030. Eén van de alternatieven om dit te realiseren is Dynamisch Afprijzen. Bij AH Tech Labs kwam hiervoor de volgende probleemstelling binnen:
                </p>
                <p>
                    <Probleemstelling/>
                </p>
                <p>
                    Het team heeft de volgende informatie ontvangen over Dynamisch Afprijzen.
                </p>
                <p>
                    <DynamischAfprijzen/>
                </p>
                <p>
                    <h5>Documentatie Omschrijving</h5>
                    <p>
                        De documentatie bevat wat ik heb gedaan tijdens de probleemanalyse van de genoemde project. De resultaten van de probleemanalyses zijn in deze verwerkt.
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
                            <Row>
                                <h5>Feedback Stagebegeleider</h5>
                                <div className={"leerdoel"}>
                                    {feedback.leerdoel3}
                                </div>
                            </Row>
                            <Row>
                                <h5>Reflectie</h5>
                                <p>
                                    Door te werken aan dit leerdoel wilde ik leren hoe een probleem naar een project kan worden omgezet.
                                </p>
                                <p>
                                    Tijdens de stage heb ik aan alle probleemanalyses meegedaan. Door deel te nemen aan de probleemanalysesessies heb ik meer inzicht gekregen in de projecten en de applicaties die daarvoor ontwikkelt moesten worden.
                                </p>
                                <p>
                                    Mijn inzet beoordeel ik als  volgt:
                                    <br/>
                                    In het begin heb ik een passieve houding aangenomen. Ik durfde geen vragen te stellen. Hierdoor kreeg ik op een later moment inzicht op de doelstellingen van de probleemanalyses. Namelijk niet het wiel opnieuw uitvinden. Met andere woorden zijn er al oplossingen voor de problemen, zo ja wat zijn die en hoe kan dat, beter, geimplementeerd worden.
                                </p>
                                <p>
                                    De ontwikkeling die ik heb gemaakt is:
                                    <ul>
                                        <li>
                                            Kijk eerst rond voor oplossingen op de problemen die er zijn. Vaak zijn er wel oplossingen aanwezig en kunnen deze, beter, geimplementeerd worden
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    Leerpunten:
                                    <ul>
                                        <li>
                                            Goed kijken wat er al beschikbaar is om tijd, geld en inzet te besparen
                                        </li>
                                        <li>
                                            Een actievere houding aannemen tijdens de diverse overleggen. Hetgeen betekent vragen stellen en meer oog hebben voor het resultaat en doel van de oplossing.
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    Voor de toekomst zal ik eerst rondkijken voor een al bestaand oplossing voor problemen. Dit kan bedrijven namelijk tijd, moeite en geld besparen.
                                </p>
                                <p>
                                    Voor de volgende keer zal ik een actievere houding aannemen tijdens de probleemanalyses. En voor het gebruik van de probleemanalyse vragen wat het resultaat en doel is.
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

export default Problem;