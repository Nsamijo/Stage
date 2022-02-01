import {Accordion, Container, Row} from "react-bootstrap";

const Problem = () => {
    return (
        <Container>
            <Row>
                <h5>Uitwerking</h5>
            </Row>
            <Row>
                <p>
                    Albert Heijn wilt in 2030 zijn voedselverspilling gehalveerd hebben. Voor dit doel zijn er enkele initiatieven genomen waaronder Dynamisch Afprijzen.
                </p>
            </Row>
            <Row>
                <h5>Dynamisch Afprijzen</h5>
                <p>
                    Albert Heijn prijst momenteel in supermarkten alle producten af, met 35 procent, die hun houdbaarsheid datum naderen. Dynamisch Afprijzen bouwt hier verder op en houdt in:
                </p>
                <p>
                    Producten zullen een kortingspercentage krijgen die op basis van verschillende factoren (b.v. vraag, tijd, etc) zal toenemen. Afgeprijsde producten hebben een kortingspercentage van 25 procent en kan, afhankelijk van de factoren, oplopen tot 70 procent. Hierbij zou het aantrekkerlijk voor de klant moeten zijn om afgeprijsde producten te kopen.
                </p>
            </Row>
            <Row>
                <Row>
                    <h5>Documentatie</h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Probleemstelling Bewijs
                            </Accordion.Header>
                            <Accordion.Body>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Row>
        </Container>
    )
}

export default Problem;