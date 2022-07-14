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
                        Elk project wordt opgesteld met een aantal plannen en afspraken op basis van tijdens een presentatie verkregen informatie. Tijdens de presentatie wordt de afdeling benoemd die producteigenaar is. Deze plannen en afspraken moeten in de gaten worden gehouden om zo het voortgang van een project te kunnen monitoren.
                    </p>
                    <p>
                        In AH Tech Labs wordt er gebruikt van de Lean-methodologie: Lean Start-Up. Hiermee kan de afdeling bestaande klant- en bedrijfsuitdagingen oplossen met nieuwe, incrementele verbeteringen. Verder is de afdeling ook bezig met het innoveren, vinden en verbeteren van nieuwe business modellen voor klanten. De Lean Start-Up methode is zeer efficient voor het innoveren en ontwikkelen van concepten, waarbij de nadruk ligt op snelle validatie van ideeën en continue klantcontact - <a href={"https://labs.ah.nl/"}>AH Tech Labs</a>
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
                                        De Lean Start-Up had veel overeenkomsten met de werkmethodiek, Scrum, van de opleiding Informatica. Door de overeenkomsten was het makkelijk om te begrijpen en toe te passen. Zo lukte het om gedurende de stage mee te draaien met het inplannen van taken. In het begin ging het oppakken van taken wat minder, de reden hiervoor is dat ik niet wist hoe een Jira-bord werkte. Ook merkte ik dat ik moeite had met het bijhouden van de project voortgang.
                                        <p>
                                            Om dit te verbeteren heb ik pas later, bij het tweede project, vragen gesteld over het Jira-bord. Door het begrijpen van de Jira-bord werd ook het bijhouden van de project voortgang beter. Hierdoor kon ik het team beter ondersteunen en zelf taken oppakken.
                                        </p>
                                    </p>
                                    <p>
                                        Als ik terug kijk naar mijn aanpak en inzet van dit leerdoel geef ik mezelf een matige beoordeling. De redenen hiervoor zijn:
                                        <ul>
                                            <li>
                                                De werkmethodiek verschilde niet veel van wat was aangeleerd op school. Het verschil was te merken in de tijd die besteedt werd aan het verzamelen van functionaliteit, ontwikkelen, testen en online zetten van de projecten (applicaties). De tijd die daaraan besteed is is aanzienlijk minder geweest.
                                            </li>
                                            <li>
                                                Door niet te durven vragen vanaf het begin aan kon ik niet meteen meedraaien in het team.
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        Gekeken naar mijn aanpak van dit leerdoel zie ik ook de fouten die ik heb gemaak. Hetgene dat ik anders zou doen zijn:
                                        <ul>
                                            <li>
                                                Stagebegeleider vragen voor uitleg over de Jira-borden
                                            </li>
                                            <li>
                                                Teamleden gevraag over hoe ik het beste de voortgang kon bijhouden
                                            </li>
                                            <li>
                                                Aantekeningen gemaakt van de projectmeetingen om de voortgang bij te houden
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        De volgende vorderingen heb ik moeten maken om goed bij te draaien in de projecten:
                                        <ul>
                                            <li>
                                                Weten hoe de Jira-borden werken om zo het projectvoortgang te bewaren
                                            </li>
                                            <li>
                                                Durven vragen om hulp
                                            </li>
                                        </ul>
                                        <p>
                                            Het is mij gelukt om deze vorderingen te maken door eerst mee te kijken met een stagebegeleider. En het toegeven van mijn tekort aan kennis. Toen de stagebegeleider vroeg of ik nogmaals uitleg wilde accepteerde ik deze.
                                        </p>
                                    </p>
                                    <p>
                                        De vorderingen die zijn gemaakt bevat 1 mijlpaal voor mij: het durven vragen om hulp. Nadat deze vordering kon ik aanzienlijke verbeteringen maken in zowel mijn projecthouding als mijn projectbijdrage. Deze vordering zal ik zeker meenemen tijdens mijn volgende stage.
                                    </p>
                                    <p>
                                        Helaas ben ik nog niet geheel tevreden over de mate dat dit leerdoel is afgerond. Dit komt door de late begrip van de projecttool. Voor de volgende stage zal ik meer aandacht besteden aan het begrijpen van de gehanteerde projecttool.
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