import React from "react";
import {Col, Row} from "react-bootstrap";

import './Home.css';
import Image from "./pasfoto.png";

const Home = () => {
    return (
        <Row>
            <Col lg={6}>
                <h1>Nathan K. Samijo</h1>
                <div>
                    Ik ben Nathan Samijo, geboren op 16 juni 2001 in Frans-Guyana, Cayenne. Momenteel ben ik een derdejaars Informatica student aan de Hogeschool Rotterdam.
                </div>
                <br/>
                <div>
                    Voor mijn stage heb ik gekozen om bij <a href={"https://www.ah.nl/over-ah"}>Albert Heijn</a> te gaan. Hier zal ik stage lopen bij de afdeling: <a href={"https://www.ah.nl/technology/ah-tech-labs"}>AH Tech Labs</a>, deze valt onder de hoofd-afdeling: <a href={"https://www.ah.nl/technology"}>AH Technology</a>.
                </div>
                <br/>
                <div>
                    Tijdens mijn stage heb ik gewerkt aan verschillende projecten. Waaronder <a href={"https://www.ah.nl/widgets/koopjeshoek"}>Digitale Koopjeshoek</a> die gebruikt maakt van Albert Heijn services om dynamisch afgeprijsde producten van een winkel te tonen.
                </div>
            </Col>
            <Col lg={6} align="center">
                <img className="pasfoto" src={Image} alt="Foto Nathan Samijo"/>
            </Col>
        </Row>
    );
}

export default Home;
