import {Button, Col, Container, Offcanvas, Row} from "react-bootstrap";
import "./leerdoel.css";
import {useState} from "react";

const LeerdoelItem = (props) => {

    const [evidence, setEvidence] = useState(false);
    const evidenceClose = () => {setEvidence(false)};
    const evidenceShow = () => {setEvidence(true)};

    const [reflect, setReflect] = useState(false);
    const reflectClose = () => {setReflect(false)};
    const reflectShow = () => {setReflect(true)};

    const [feedback, setFeedback] = useState(false);
    const feedbackClose = () => {setFeedback(false)};
    const feedbackShow = () => {setFeedback(true)};

    return (
        <Container>
            <Offcanvas show={evidence} onHide={evidenceClose} placement={"top"}  scroll={true}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <Container>
                                Bewijs
                            </Container>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Container>
                        <h6>Bewijs volgens Stageplan</h6>
                        <div>
                            {props.bewijsStage}
                        </div>
                        <br/>
                        <h6>Inleiding</h6>
                        <div>
                            {props.inleiding}
                        </div>
                        </Container>
                    </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={reflect} onHide={reflectClose} placement={"bottom"} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Reflectie</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Hier komt al mijn bewijs terecht
                </Offcanvas.Body>

            </Offcanvas>

            <Offcanvas show={feedback} onHide={feedbackClose} placement={"bottom"} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Feedback</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Hier komt al mijn bewijs terecht
                </Offcanvas.Body>

            </Offcanvas>

            <Container>
                <Row>
                    <h1>Beschrijving</h1>
                    <div className="leerdoel">
                        {props.leerdoel}
                    </div>
                </Row>
                <Row className="buttonRow">
                    <Col>
                        <Button variant="outline-dark" onClick={evidenceShow}>Bewijs</Button>
                    </Col>
                    <Col>
                        <Button variant="outline-dark" onClick={reflectShow}>Reflectie</Button>
                    </Col>
                    <Col>
                        <Button variant="outline-dark" onClick={feedbackShow}>Feedback</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default LeerdoelItem;