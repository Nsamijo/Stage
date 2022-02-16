import {Accordion, Container, Row} from "react-bootstrap";
import {Leerdoel4} from "../_documentation/advise/advise";

export const Advise = () => {
    return (
        <Container>

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