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
                    Voor de stage is er nooit gebruik gemaak van Continuous Integration/Continiuous Deployment. Daarom is er onderzocht wat deze betekent, inhoud en hoe dit gebeurt in AH Tech Labs.
                </p>
                <p>
                    <CI/>
                </p>
                <p>
                    Nu bekend is wat CI/CD betekent en inhoud is er gekeken hoe dit gebeurt in AH Tech Labs.
                </p>
                <p>
                    In AH Tech Labs wordt <a target={"new"} href={"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"}>Github Actions</a> gebruikt voor Continuous Integration en Continuous Deployment.
                    <p>
                        <Actions/>
                    </p>
                </p>
                <p>
                    <h5>Leerdoel Documentatie</h5>
                    <p>
                        Om dit leerdoel te behalen is er gekeken naar hoe CI/CD gebeurt binnen AH Tech Labs. Hier kwam naar boven dat CI/CD, in AH Tech Labs, geimplementeerd wordt met Github Actions. Tijdens de stage is het CI/CD proces van AH Tech Labs gebruikt om gemaakte code te intergreren en deployen (releasen).
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