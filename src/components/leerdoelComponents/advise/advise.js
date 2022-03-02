import {Accordion, Container, Row} from "react-bootstrap";
import {Leerdoel4} from "../_documentation/advise/advise";

export const Advise = () => {
    return (
        <Container>
            <Row>
                <p>
                    <h5>Leerdoel</h5>
                    <p>
                        Dit leerdoel gaat over het adviseren van de inrichting van processen en/of informatie voor een nieuw te ontwikkelen, aan te schaffen of aan te passen bestaand ICT-systeem.
                    </p>
                </p>
                <p>
                    Tijdens de stage zijn er verschillende momenten geweest waar er adviezen nodig waren. De adviezen die aansluiten bij dit leerdoel vonden plaats tijdens de probleemanalyse. Deze adviezen gaan over de functionaliteiten die als individu zijn gegeven aan het team.
                </p>
                <p>
                    <h5>Leerdoel Bewijs</h5>
                    <p>
                        Voor dit leerdoel zijn de gegeven adviezen gedocumenteerd. De resultaten van de adviezen zijn als extra ook opgenomen in het bewijs materiaal.
                    </p>
                </p>
            </Row>
            <Row>
                <Row>
                    <h5>Documentatie</h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Advies over Functionaliteit
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