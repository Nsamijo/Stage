import React from "react";
import {Col, Row} from "react-bootstrap";

import "./about.css"

const About = () => {
    return (
        <Row>
            <Col>
                <h1>Algemene Informatie</h1>
                <div className="quote">
                    <p>
                        <h5>Student:</h5>
                        <p>
                            Nathan Samijo
                        </p>
                    </p>
                    <p>
                        <h5>Student-nr:</h5>
                        <p>
                            0961962
                        </p>
                    </p>
                    <p>
                        <h5>Student-email:</h5>
                        <p>
                            0961962@hr.nl
                        </p>
                    </p>
                    <p>
                        <h5>Opleiding:</h5>
                        <p>
                            Informatica
                        </p>
                    </p>
                </div>
            </Col>
        </Row>
    )
}

export default About;