import {Accordion, Container, Row} from "react-bootstrap";
import Project from "../_documentation/manage/project-doc";
import React from 'react';

import './manage-leerdoel.css';
import {Jira, Lean} from "./_docs/lean";
import {feedback, manage} from "../../../constants/content";


const Manage = () => {
    return (
        <Container>
            <Row>
                <h2>Leerdoel: Manage and Control</h2>
                <div className="leerdoel">
                    {manage.leerdoel}
                </div>
            </Row>
            <Row>
                <p>
                    <p>
                        Dit leerdoel gaat over het beheren, monitoren en optimaliseren van de ontwikkeling, ingebruikname en gebruik van ICT-systemen.
                    </p>
                </p>
                <h5>Leerdoel Context</h5>
                <p>
                    Bij dit leerdoel is er gewerkt aan het beheersen van de werkmethodologie, Lean Start-Up, van AH Tech Labs. Er is onderzoek gedaan naar wat Lean Start-up inhoudt. De tool, Jira-bord, die AH Tech Labs gebruikt om de project voortgang te bewaren en beheren.
                </p>
                <p>
                    Om dit te kunnen doen is er eerst gekeken hoe AH Tech Labs de projecten beheert. De werkwijze die gehanteert wordt. Vervolgens is er gekeken naar hoe de project voortgang bewaard wordt.
                </p>
                <p>
                    <h5>Beheren</h5>
                    <p>
                        Elk project in AH Tech Labs begint met een presentatie. Deze presentatie wordt gegeven door een andere afdeling of stakeholder. De afdeling of stakeholder is de producteigenaar. De projecteigenaar is AH Tech Labs.
                    </p>
                    <p>
                        Na de presentatie vindt er een analyse van het probleem plaats. Op basis van deze analyse worden mogelijke oplossingen oogesteld. Op basis daarvan wordt ook het project vastgesteld met bijbehorende projectplannen.
                    </p>
                    <p>
                        De plannen en afspraken worden opgenomen in het projectplan om gedurende het project te kunnen blijven monitoren.
                    </p>
                    <p>
                        In AH Tech Labs wordt er gebruikt gemaak van de Lean-methodologie: Lean Start-Up. Hiermee kan de afdeling bestaande klant- en bedrijfsuitdagingen oplossen met verbeteringen. Verder is de afdeling ook bezig met het innoveren, vinden en verbeteren van nieuwe business modellen voor klanten. De Lean Start-Up methode is efficient voor het innoveren en ontwikkelen van concepten, waarbij de nadruk ligt op snelle validatie van ideeën en continue klantcontact - <a href={"https://labs.ah.nl/"}>AH Tech Labs</a>
                    </p>
                    <p>
                        <Lean/>
                    </p>
                    <p>
                        <h5>Monitoren</h5>
                        <p>
                            Bij elk project is het noodzakelijk om de voortgang in de gaten te houden. Om bij Tech Labs de voortgang te monitoren wordt er gebruik gemaakt van Jira scrumborden.
                        </p>
                        <p>
                            Elk project in Tech Labs heeft een eigen scrumbord waarbij er taken (features) kunnen worden toegevoegd. Bij de taken kunnen er kwaliteiteisen worden toegevoegd.
                        </p>
                        <p>
                            Indien een taak was afgerond gebeurt het volgende:
                            <ol>
                                <li>
                                    Er wordt gekeken of de afgeronde taak voldoet aan de kwaliteitseisen
                                </li>
                                <li>
                                    Als deze voldoet wordt deze in een aparte kolom, genaamd: "Done", geplaats
                                </li>
                            </ol>
                            Door dit te doen was er een goed overzicht van taken die waren afgerond en die nog gedaan moesten worden.
                        </p>
                        <p>
                            <Jira/>
                        </p>
                    </p>
                </p>
                <p>
                    <h5>Documentatie Omschrijving</h5>
                    <p>
                        Door onderzoek te doen naar de gebruikte werkmethode en tool kon ik de voortgang van projecten bewaren en beheren. In de documentatie is een project voortgang opgenomen. Hierin is verwerkt evenementen, meetings en mijlpalen van het project.
                    </p>
                </p>
            </Row>
            <Row>
                <h5>Documentatie</h5>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Project Documentation (Timeline)
                        </Accordion.Header>
                        <Accordion.Body>
                            <Project/>
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
                            <Container>
                                <Row>
                                    <h5>Feedback Stagebegeleider</h5>
                                    <div className={"leerdoel"}>
                                        {feedback.leerdoel1}
                                    </div>
                                </Row>
                                <Row>
                                    <p>
                                        Met dit leerdoel wilde ik de werkwijze binnen een bedrijf me eigen maken. De werkmethodiek die gehanteerd wordt begrijpen en kunnen gebruiken. Tijdens mijn stage bij AH Tech Labs heb ik geleerd om Lean Start-Up te gebruiken.
                                    </p>
                                    <p>
                                        De Lean Start-Up had veel overeenkomsten met de werkmethodiek, Scrum, van de opleiding Informatica. Door de overeenkomsten was het begrijpen en toepassen minder uitdagend. Zo lukte het om gedurende de stage mee te draaien met het inplannen van taken.
                                        <br/>
                                        In het begin ging het oppakken van taken wat minder, de reden hiervoor is dat ik niet wist hoe een Jira-bord werkte. Hierdoor had ik moeite met het bijhouden van de project voortgang. Dit kwam omdat ik onvoldoende kennis had van de werking van de Jira-bord.
                                        <p>
                                            Om dit te verbeteren heb ik pas later, bij het tweede project, vragen gesteld over het Jira-bord en de werking daarvan. Door het begrijpen van de Jira-bord werd ook het bijhouden van de project voortgang beter. Hierdoor kon ik het team beter ondersteunen en zelf taken oppakken.
                                        </p>
                                    </p>
                                    <p>
                                        Als ik terug kijk naar mijn aanpak en inzet van dit leerdoel geef ik mezelf een matige beoordeling. De redenen hiervoor zijn:
                                        <ul>
                                            <li>
                                                Ik kon meedenken met het plannen maar kon zelf de planning niet vaststellen en/of aanpassen.
                                            </li>
                                            <li>
                                                Door niet te durven vragen vanaf het begin aan kon ik de voortgang van het project niet in de gaten houden. Hetgeen betekent dat ik mijn collegas moest vragen wat mijn taken waren.
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        Gekeken naar mijn aanpak van dit leerdoel zie ik de volgende verbeterpunten:
                                        <ul>
                                            <li>
                                                Stagebegeleider eerder om uitleg hebben gevraagd over het gebruik van de Jira-borden
                                            </li>
                                            <li>
                                                Teamleden vragen hoe ik het beste de voortgang kon bijhouden
                                            </li>
                                            <li>
                                                Notities maken van de projectmeetingen om de voortgang bij te houden en het bijhouden van een stagelogboek
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        Ontwikkelingen die ik doorgemaakt om goed mee te kunnen draaien in de projecten:
                                        <ul>
                                            <li>
                                                Weten hoe de Jira-borden werken om zo het projectvoortgang te bewaken
                                            </li>
                                            <li>
                                                Het vragen om hulp
                                            </li>
                                        </ul>
                                        <p>
                                            Voor wat betreft de Jira-borden heb ik moeten toegeven aan mijn stagebegeleider dat ik kennis te kort kwam. Hij heeft mij nogmaals uitleg gegeven over het gebruik en werking van de Jira-borden.
                                        </p>
                                    </p>
                                    <p>
                                        Belangrijkste aandachtspunt voor mij: het erkennen van gebrek aan kennis en het durven vragen om hulp. Nadat ik mij hiervan bewust was is mijn houding in het project verandert en vond ik mijn bijdrage aan de voortgang van het project stukken beter. Dit is een belangrijke aandachtspunt gedurende mijn verdere studie c.q. mijn verdere carriere.
                                    </p>
                                </Row>
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <br/>
        </Container>
    )
}

export default Manage;