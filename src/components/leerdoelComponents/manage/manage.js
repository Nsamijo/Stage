import {Container, Row} from "react-bootstrap";
import {manage} from "../../../constants/content";


const Manage = () => {
    return (
        <Container>
            <Row>
                <h6>Bewijs volgens Stageplan</h6>
                <div>
                    {manage.bewijsStageplan}
                </div>
            </Row>
            <br/>
            <Row>
                <h6>Inleiding</h6>
                <div>
                    Om het proces van een project te goed te documenteren moet deze eerst afgebakend worden. Het project zal afgebakend worden met het volgende:
                    <ul>
                        <li>Project duur</li>
                        <li>Werkmethodiek</li>
                        <li>Bijdrage student</li>
                    </ul>
                    Met deze afbakeningen zal dit leerdoel worden uitgewerkt.
                </div>
            </Row>
            <br/>
            <Row>
                <h6>Project Omschrijving</h6>
                <div>
                </div>
            </Row>
        </Container>
    )
}

export default Manage;