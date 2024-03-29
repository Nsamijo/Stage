import React from 'react';
import './bijlage.css';
import {Accordion, Row} from "react-bootstrap";


function FlowchartBijlage() {

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Bijlage 2: Applicatie Flowchart Digitale Koopjeshoek
                    </Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <h5>Adviesdocument Bedrijfsbegeleider</h5>
                        </Row>
                        <Row>
                            <iframe
                                title={"Adviesdocument Bedrijfsbegeleider"}
                                className={'pdf'}
                                src={'./flowchart.pdf'}
                            >

                            </iframe>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default FlowchartBijlage;