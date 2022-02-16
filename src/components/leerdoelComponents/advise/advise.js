import {Accordion, Container, Row} from "react-bootstrap";
import {Leerdoel4} from "../_documentation/advise/advise";

export const Advise = () => {
    return (
        <Container>
            <Row>
                <p>
                    Het bepalen van functionaliteiten gebeurt tijdens de brainstorm-sessies. (Gedaan bij Analyse Leerdoel 2)
                </p>
            </Row>
            <Row>
                <Row>
                    <h5>Documentatie</h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Advise on Functionality
                            </Accordion.Header>
                            <Accordion.Body>
                                <Leerdoel4/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Row>
        </Container>
    )
}