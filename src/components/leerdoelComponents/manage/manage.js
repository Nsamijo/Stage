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
                    {manage.inleiding}
                </div>
            </Row>
        </Container>
    )
}

export default Manage;