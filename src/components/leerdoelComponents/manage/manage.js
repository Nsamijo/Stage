import {Accordion, Container, Row} from "react-bootstrap";
import Project from "../_documentation/manage/project-doc";

import './manage-leerdoel.css';
import {Jira, Lean} from "./lean/lean";


const Manage = () => {
    return (
        <Container>
            <Row>
                <p>
                    <h5>Manage and Control</h5>
                    <p>
                        Dit leerdoel gaat over het beheren, monitoren en optimaliseren van de ontwikkeling, ingebruikname en gebruik van ICT-systemen
                    </p>
                </p>
                <p>
                    Bij dit leerdoel is er gekozen het manier van werken bij stage te volgen met andere woorden: planmatig werken. Tech Labs maakt gebruik van de Lean-methode: Lean Start-up voor het beheren en opstellen van plannen en producteisen. De gemaakte plannen en eisen worden genoteerd in een Jira Bord.
                </p>
                <p>
                    <h5>Beheren</h5>
                    <p>
                        Elk project wordt opgesteld met een aantal plannen en afspraken. Hier gaat het om afspraken die worden vastgelegd in een norm. Een norm kan bijvoorbeeld zijn hoe lang iets mag duren, kwaliteiteisen, etc. Deze plannen en normen moeten in de gaten worden gehouden om zo het voortgang van een project te kunnen peilen. Oftewel er zal een werkmethodiek worden gebruikt om het project te beheren.
                    </p>
                    <p>
                        In AH Tech Labs wordt er gebruikt van het Lean-methodologie: Lean Start-Up. Hiermee kan de afdeling bestaande klant- en bedrijfsuitdagingen oplossen met nieuwe, incrementele verbeteringen. Verder is de afdeling ook bezig met het innoveren, vinden en verbeteren van nieuwe business modellen voor de klanten. De Lean Start-Up methode is zeer efficient voor het innoveren en ontwikkelen van concepten, waarbij de nadruk ligt op snelle validatie van ideeën en continue klantcontact - <a href={"https://labs.ah.nl/"}>AH Tech Labs</a>
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