import React from 'react';
import './bijlage.css';
import {Accordion, Row} from "react-bootstrap";
import FlowchartBijlage from "../leerdoelComponents/design/_docs/fc_docs";


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
                                title={"Adviesdocument Bedrijfsbegeleider"}
                                className={'pdf'}
                                src={'./advies.pdf'}
                            >

                            </iframe>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br/>
            <FlowchartBijlage/>
        </div>
    );
}

export default Bijlage;