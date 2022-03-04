import {Accordion, Container, Row} from "react-bootstrap";
import {CI} from "../_docs/definitions";

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
            </Row>
            <Row>
                <h5>Documentatie</h5>
                <Accordion>
                    <Accordion.Item eventKey={"0"}>
                        <Accordion.Header>
                            Continious Integration and Continious Development Documentatie
                        </Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    );
}