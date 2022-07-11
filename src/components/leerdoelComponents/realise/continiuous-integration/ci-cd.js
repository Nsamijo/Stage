import {Accordion, Container, Row} from "react-bootstrap";
import {Actions, CI} from "../_docs/definitions";
import {CICDDocs} from "../_docs/documentation";

export const CICD = () => {
    return (
        <Container>
            <Row>
                <p>
                    <h5>Leerdoel</h5>
                    <p>
                        Dit leerdoel gaat over het realiseren van een (deel van een) ICT-systeem op basis van een ontwerp.
                    </p>
                </p>
                <p>
                    Tijdens de stage heb ik kennis gemaakt met Continuous Integration/Continiuous Deployment.
                </p>
                <p>
                    <CI/>
                </p>
                <p>
                    In AH Tech Labs wordt <a target={"new"} href={"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"}>Github Actions</a> gebruikt voor Continuous Integration en Continuous Deployment.
                </p>
                <p>
                    <Actions/>
                </p>
                <p>
                    <h5>Leerdoel Documentatie</h5>
                    <p>
                        Gekeken is naar hoe CI/CD binnen in AH Tech Labs gebruikt wordt. Tijdens de stage is het CI/CD proces van AH Tech Labs gebruikt om de gemaakte code te intergreren en deployen (online zetten).
                    </p>
                    <p>
                        Voor de documentatie is er een foto gemaakt van de CI/CD processen en gedocumenteerd.
                    </p>
                </p>
            </Row>
            <Row>
                <h5>Documentatie</h5>
                <Accordion>
                    <Accordion.Item eventKey={"0"}>
                        <Accordion.Header>
                            Continious Integration and Continious Development Documentatie
                        </Accordion.Header>
                        <Accordion.Body>
                            <CICDDocs/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    );
}