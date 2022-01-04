import React from "react";
import {Col, Row} from "react-bootstrap";

import "./leerdoelen.css";


const Leerdoelen = () => {
    return (
        <Row>
            <Col>
                <ul className="nav flex-column">
                    <li className="nav-item" href="#leerdoelen" role="button" data-slide-to="0">
                        <a className="nav-link" href="#">1</a>
                    </li>
                    <li className="nav-item" href="#leerdoelen" role="button" data-slide-to="1">
                        <a className="nav-link" href="#">2</a>
                    </li>
                    <li className="nav-item" href="#leerdoelen" role="button" data-slide-to="2">
                        <a className="nav-link disabled" href="#">3</a>
                    </li>
                </ul>
            </Col>
            <Col>
                <div id="leerdoelen" className="carousel slide" data-interval={false} data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <span>
                                Hello World
                            </span>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="..." alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="..." alt="Third slide"/>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Leerdoelen