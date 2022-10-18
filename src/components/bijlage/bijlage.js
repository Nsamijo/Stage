import React from 'react';
import './bijlage.css';
import {Accordion, Row} from "react-bootstrap";


function Bijlage() {

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Bijlage 1: Adviesdocument Bedrijfsbegeleider
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <h5>Adviesdocument Bedrijfsbegeleider</h5>
                        </Row>
                        <Row>
                            <iframe
                                className={'pdf'}
                                src={'./advies.pdf'}
                            >

                            </iframe>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default Bijlage;