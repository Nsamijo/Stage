import {Accordion, Container, Row} from "react-bootstrap";
import React from 'react';

import {Leerdoel4} from "../_documentation/advise/advise";
import {Advies} from "./_docs/documentation";
import {advice} from "../../../constants/content";

export const Advise = () => {
    return (
        <Container>
            <Row>
            <h2>Leerdoel: Adviseren</h2>
            <div className="leerdoel">
                {advice.leerdoel}
            </div>
        </Row>
            <Row>
                <p>
                    <p>
                        Dit leerdoel gaat over het adviseren van de inrichting van processen en/of informatie voor een nieuw te ontwikkelen, aan te schaffen of aan te passen bestaand ICT-systeem.
                    </p>
                </p>
                <p>
                    Tijdens de stage zijn er verschillende momenten geweest waarop ik adviezen moest uitbrengen. De adviezen die aansluiten bij dit leerdoel vonden plaats tijdens de probleemanalyse. De adviezen hadden betrekking op de functionaliteit van de te ontwikkelen software.
                </p>
                <p>
                    Om de leerdoel beter te begrijpen is eerst gekeken naar de betekenis van het woord advies.
                </p>
                <p>
                    <Advies/>
                </p>
                <p>
                    De meeste adviezen heb ik gegeven bij:
                    <ul>
                        <li>Het bepalen van de functionaliteiten</li>
                        <li>Het bepalen van het ontwerp van de gebruikersinterface</li>
                    </ul>
                </p>
                <p>
                    Voor het komen op adviezen ben ik in gesprek gegaan met mijn oom, <a target={"new"} href={"https://www.linkedin.com/in/carl-leysner-8039467/"}>Carl Leysner</a> .
                </p>
                <p>
                    <h5>Leerdoel Bewijs</h5>
                    <p>
                        Voor dit leerdoel zijn de gegeven adviezen gedocumenteerd. De adviezen die zijn opgenomen in de documentatie vonden plaats tijdens de probleemanalyse. De resultaten van de adviezen zijn als extra opgenomen in het bewijs materiaal.
                    </p>
                </p>
            </Row>
            <Row>
                <Row>
                    <h5>Documentatie</h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Advies over Functionaliteit
                            </Accordion.Header>
                            <Accordion.Body>
                                <Leerdoel4/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Row>
        </Container>
    )
}