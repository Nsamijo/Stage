import {Accordion, Container, Row} from "react-bootstrap";
import {Leerdoel3} from "../../_documentation/analyse/leerdoel3/leerdoel3";

const Problem = () => {
    return (
        <Container>
            <Row>
                <p>
                    Albert Heijn wilt voedselverspilling aanzienlijk verminderen en oogt de voedselverspilling te brengen naar 20 procent voor 2030. Voor dit doel zijn er enkele initiatieven genomen waaronder Dynamisch Afprijzen. Hierbij kreeg AH Tech Labs als vraagstuk:
                </p>
                <p>
                    Hoe kan Albert Heijn zijn klanten, zo enthousiast mogelijk, over Dynamisch Afrpijzen laten weten?
                </p>
            </Row>
            <Row>
                <h5>Dynamisch Afprijzen Werking</h5>
                <p>
                    Albert Heijn prijst momenteel in supermarkten alle producten af, met 35 procent, die hun houdbaarsheid datum naderen. Dynamisch Afprijzen bouwt hier verder op en houdt in:
                    <p>
                        Producten zullen een kortingspercentage krijgen die op basis van verschillende factoren (b.v. vraag, tijd, etc) zal toenemen. Afgeprijsde producten hebben een kortingspercentage van 25 procent en kan, afhankelijk van de factoren, oplopen tot 70 procent. Hierbij zou het aantrekkerlijk voor de klant moeten zijn om afgeprijsde producten te kopen.
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