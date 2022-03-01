import {Accordion, Container, Row} from "react-bootstrap";
import Project from "../_documentation/manage/project-doc";

import './manage-leerdoel.css';
import {Jira, Lean} from "./_docs/lean";


const Manage = () => {
    return (
        <Container>
            <Row>
                <p>
                    <h5>Manage and Control</h5>
                    <p>
                        Dit leerdoel gaat over het beheren, monitoren en optimaliseren van de ontwikkeling, ingebruikname en gebruik van ICT-systemen.
                    </p>
                </p>
                <p>

                    Bij dit leerdoel is er gekozen het standaard van het stagebedrijf te hanteren, dit standaard is een planmatige werkwijze. Tech Labs maakt gebruik van de Lean-methode: Lean Start-up voor het opstellen en beheren van plannen en producteisen. De gemaakte plannen en eisen worden genoteerd in een Jira scrumbord.
                </p>
                <p>
                    <h5>Beheren</h5>
                    <p>
                        Elk project wordt opgesteld met een aantal plannen en afspraken. Deze plannen en afspraken moeten in de gaten worden gehouden om zo het voortgang van een project te kunnen peilen. Oftewel er zal een werkmethodiek worden gebruikt om het project te beheren.
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
                    <h5>Leerdoel Behaald</h5>
                    <p>
                        Voor dit leerdoel is het gebruik van de werkmethodologie (Lean Start-up) en Jira scrumbord gedocumenteerd. De documentatie bevat een tijdlijn van het eerste stageopdracht met de taken die zijn uitgevoerd.
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
        </Container>
    )
}

export default Manage;