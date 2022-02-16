import {Accordion, Container, Row} from "react-bootstrap";
import {Leerdoel3} from "../../_documentation/analyse/leerdoel3/leerdoel3";

const Problem = () => {
    return (
        <Container>
            <Row>
                <p>
                    Albert Heijn wil zijn voedselverspilling verminderen en oogt deze omlaag te brengen naar 20 procent in het jaar 2030. Voor dit doel zijn er enkele initiatieven genomen waaronder Dynamisch Afprijzen. Hierbij kreeg AH Tech Labs als vraagstuk:
                    <p><b>
                        Hoe kan Albert Heijn zijn klanten, zo enthousiast mogelijk, over Dynamisch Afprijzen laten weten?
                    </b>
                    </p>
                </p>

            </Row>
            <Row>
                <h5>Dynamisch Afprijzen Uitleg</h5>
                <p>
                    Albert Heijn prijst momenteel in supermarkten alle producten af, met 35 procent, die hun houdbaarsheid datum naderen. Dynamisch Afprijzen bouwt hier verder op en houdt in:
                    <p>
                        De normale afprijspercentage wordt nu dynamisch. Afhankelijk van factoren (zoals vraag, tijd, etc) loopt de afprijspercentage dynamisch op. De afprijspercentage begint met 25 procent en kan oplopen tot 70 procent. Albert Heijn redeneert dat (dynamisch) afgeprijsde producten hierdoor aantrekkelijker worden voor klanten.
                    </p>
                </p>
            </Row>
            <Row>
                <p>
                Aangezien de probleemstelling vrijwel compleet is aangeleverd is er gekozen om voor dit leerdoel de probleemuitwerking en resultaat van dien te documenteren.
                </p>
            </Row>
            <Row>
                <Row>
                    <h5>Documentatie</h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Probleemuitwerking en Resultaat
                            </Accordion.Header>
                            <Accordion.Body>
                                <Leerdoel3/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Row>
        </Container>
    )
}

export default Problem;