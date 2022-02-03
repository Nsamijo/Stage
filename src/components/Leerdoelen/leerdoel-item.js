import {Button, Col, Container, Offcanvas, Row} from "react-bootstrap";
import "./leerdoel.css";
import {useState} from "react";

const LeerdoelItem = (props) => {

    const [evidence, setEvidence] = useState(false);
    const evidenceClose = () => {setEvidence(false)};
    const evidenceShow = () => {setEvidence(true)};

    const [reflect, setReflect] = useState(false);
    const reflectClose = () => {setReflect(false)};
    // const reflectShow = () => {setReflect(true)};

    const [feedback, setFeedback] = useState(false);
    const feedbackClose = () => {setFeedback(false)};
    // const feedbackShow = () => {setFeedback(true)};

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
                        {props.bewijsComponent}
                    </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={reflect} onHide={reflectClose} placement={"top"} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Reflectie</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Hier komt al mijn bewijs terecht
                </Offcanvas.Body>

            </Offcanvas>

            <Offcanvas show={feedback} onHide={feedbackClose} placement={"top"} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Feedback</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Hier komt al mijn bewijs terecht
                </Offcanvas.Body>

            </Offcanvas>
            <Row className="align-items-center leerdoelGeneral">
                <Col lg={6}>
                    <h2>Leerdoel</h2>
                    <div className="leerdoel">
                        {props.beschrijving}
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="d-grid gap-2">
                        <Button variant="outline-dark" onClick={evidenceShow}>Bewijs</Button>
                    </div>
                    {/*<div className="d-grid">*/}
                    {/*    <Button variant="outline-dark" onClick={reflectShow}>Reflectie</Button>*/}
                    {/*</div>*/}
                    {/*<div className="d-grid">*/}
                    {/*    <Button variant="outline-dark" onClick={feedbackShow}>Feedback</Button>*/}
                    {/*</div>*/}
                </Col>
            </Row>
        </Container>
    )
}

export default LeerdoelItem;