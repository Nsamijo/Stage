import {Accordion, Container, Row} from "react-bootstrap";
import PullRequest from "../../_documentation/analyse/read-code/pull-request";
import {Github} from "../_docs/documentation";

const ReadCode = () => {
    return (
        <Container>
            <Row>
                <p>
                    <h5>Analyseren</h5>
                    <p>
                        Dit leerdoel gaat over het analyseren van processen, producten en informatiestromen in hun onderlinge samenhang en context.
                    </p>
                </p>
                <p>
                    Bij dit leerdoel is er gekozen om de code (features)  ontwikkelt door een mede stagaire te analyseren. Bij de analyse moet duidelijk worden wat de code zal doen en of deze voldoet aan de kwaliteitseisen van Tech Labs.
                </p>
                <p>
                    <h5>Bedrijfs Context</h5>
                    <p>
                        Elke bedrijf dat code bezit moet deze makkelijk kunnen opslaan en beheren. AH Tech Labs gebruikt hiervoor de online oplossing Github.
                    </p>
                    <p>
                        <Github/>
                    </p>
                    <p>
                        <h6>Werkwijze</h6>
                        Als een taak (feature) is afgerond word er eerst een Pull Request geopened om dit aan te geven. Een Pull Request is pas goedgekeurd als het voldoet aan de volgende eisen:
                        <ul>
                            <li>Goedkeuring van minimaal 2 mensen waarvan 1 een begeleider is</li>
                            <li>Alle testen van Github Actions succesvol heeft doorlopen</li>
                        </ul>
                    </p>
                </p>
                <p>
                    <h5>Leerdoel Behaald</h5>
                    <p>
                        Om dit leerdoel te behalen zijn een aantal Pull Request nagekeken waarvan 1 van deze is gedocumenteerd. In de documentatie zijn de conclusie en bijbehorend beeld materiaal meegenomen.
                    </p>
                </p>
            </Row>
                <Row>
                    <h5>Documentatie</h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Pull Request Demonstratie
                            </Accordion.Header>
                            <Accordion.Body>
                                <PullRequest/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
        </Container>
    )
}

export default ReadCode;