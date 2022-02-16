import {Accordion, Container, Row} from "react-bootstrap";
import PullRequest from "../../_documentation/analyse/read-code/pull-request";

const ReadCode = () => {
    return (
        <Container>
            <p>
                Bij aanpassingen/updates van de  broncode van een applicatie binnen Albert Heijn moet deze eerst worden goedgekeurd door minimaal 2 mensen, waarvan 1 van ze een begeleider moet zijn. Zo een review wordt ook wel een Pull Request genoemd.
            </p>
            <h6>Pull Request</h6>
            <p>
                Het op de hoogte stellen van mede ontwikkelaars van de veranderingen en/of toevoegingen die zijn gemaakt. Na het opstellen van een Pull Request kunnen de veranderingen/toevoegingen worden nagekeken en besproken (feedback) worden door mede ontwikkelaars. Indien er feedback wordt geleverd is het mogelijk om aanpassingen te maken en deze mee te nemen in dezelfde Pull Request.
            </p>
            <Row>
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
            </Row>
        </Container>
    )
}

export default ReadCode;