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
                                    Tijdens de stage heb ik met elke project kunnen bijdragen door middel van de probleemanalyse. Ook hebben de probleemanalyses een beter begrip gegeven over het project en de applicatie die ontwikkelt moet worden.
                                </p>
                                <p>
                                    Mijn inzet beoordeel als het volgende:
                                    <ul>
                                        <li>
                                            Participatie bij probleemanalyse: voldoende, ik kon met met mede-stagaires het probleem bespreken en zo inzichten opdoen. Deze inzichten werden later besproken en/of bevestigt in gesprekken met mijn oom.
                                        </li>
                                        <li>
                                            Gebruik van de probleemanalyse: matig, ik begreep niet zo goed wat het doel was van de probleemanalyse. Pas bij de laatste probleemanalyse kreeg ik de kern binnen: "Niet het wiel opnieuw uitvinden". Met andere woorden zijn er al oplossingen voor de problemen, zo ja wat zijn die en hoe kan dat, beter, geimplementeerd worden.
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    Mijn aanpak van dit leerdoel was niet effectief. Door een passieve houding en het niet stellen van vragen had ik pas aan het eind door wat het doel was van de probleemanalyse.
                                    <p>
                                        Met deze inzicht zal ik de volgende keer een actievere houding aannemen en vragen stellen. Hierdoor kan ik beter de probleemanalyse toepassen.
                                    </p>
                                </p>
                                <p>
                                    Bij het werken aan dit leerdoel heb ik de volgende vordering gemaakt:
                                    <ul>
                                        <li>
                                            Kijk eerst rond voor oplossingen op de problemen die er zijn. Vaak zijn er wel oplossingen aanwezig en kunnen deze beter geimplementeerd worden
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    De vorderingen zijn naar mijn mening niet wat ze moeten zijn. Wel ben ik blij en trots op de vordering die ik heb gemaakt.
                                </p>
                                <p>
                                    Voor de toekomst zal ik eerst rondkijken voor een al bestaand oplossing voor problemen. Dit kan bedrijven namelijk tijd en geld besparen.
                                </p>
                                <p>
                                    Voor de volgende keer zal ik een actievere houding aannemen tijdens de probleemanalyses. En voor het gebruik van de probleemanalyse methode eerst vragen wat het doel is van deze.
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