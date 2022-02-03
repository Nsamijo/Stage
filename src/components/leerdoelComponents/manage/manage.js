import {Accordion, Container, Row} from "react-bootstrap";
import Project from "../_documentation/manage/project-doc";

import './manage-leerdoel.css';


const Manage = () => {
    return (
        <Container>
            <Row>
                <p>
                    Binnen AH Tech Labs wordt er gebruik gemaakt van:
                    <ul>
                        <li>Lean Startup</li>
                        <li>Jira Software</li>
                    </ul>
                    <h6>Lean Start-up</h6>
                    <p>
                        <p>
                            Definitie: De Lean Startup is een methode voor het beheren en opbouwen van een bedrijf of startup door te experimenteren, testen en itereren tijdens het ontwikkelen van producten op basis van bevindingen uit testen en feedback. Deze methodologie bestaat uit 3 stappen:
                            <ul>
                                <li>Build</li>
                                <li>Measure</li>
                                <li>Learn</li>
                            </ul>
                        </p>
                        <p>
                            <h6>Build</h6>
                            Tijdens de "Build"-fase worden de minimale eisen van een product/applicatie bepaald ookwel Minimal Viable Product (MVP) genoemd. De ontwikkeling van de MVP start vrijwel meteen na zijn opstelling. De Producteigenaar kan vrijwel altijd wijzigingen makenn aan de  MVP.
                        </p>
                        <p>
                            <h6>Measure</h6>
                            De eerste versie van de MVP is ontwikkelt en gaat meteen een testfase in. Hierbij wordt getest of het product voldoet aan de minimale eisen. De feedback/resultaten van een test wordt verzameld en gesorteert. In AH Tech Labs wordt onderander gesorteerd op b.v. design.
                        </p>
                        <p>
                            <h6>Learn</h6>
                            De resultaten van de test(s) wordt uitgewerkt en geconcludeerd. Hierbij wordt b.v. geindentifieerd wat er niet werkt, wat beter kan, etc. Deze resultaten worden gebruikt als basis voor de volgende cyclus van de (Lean Startup) methodologie.
                        </p>
                    </p>
                    <h5>Jira Software</h5>
                    <p>
                        Jira Software maakt deel uit van een familie van producten die zijn ontworpen om  verschillende type teams te helpen met het beheren van werk. Oorspronkelijk was Jira ontworpen als een bug- en issuetracker. Maar vandaag de dag is Jira uitgegroeid tot een krachtige work management tool voor allerlei use cases, van requirements en test case management tot agile softwareontwikkeling. - <a href={"https://www.atlassian.com/software/jira/guides/use-cases/what-is-jira-used-for#jira-for-agile-teams"}>Jira Software</a>
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