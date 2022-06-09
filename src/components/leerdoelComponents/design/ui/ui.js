import {Accordion, Container, Row} from "react-bootstrap";
import "../../../Leerdoelen/leerdoel.css";
import {Wireframe} from "../_docs/definitions";
import {Design} from "../_docs/documentations";

export const Ontwerpen = () => {
    return (
        <Container>
            <Row>
                <p>
                    Dit onderwerp bevat 2 leerdoelen. Door de samenhang van deze leerdoelen is er gekozen om de documentatie te combineren.
                </p>
                <p>
                    <h2>Leerdoelen</h2>
                    <div className="leerdoel">
                        <h3>Leerdoel Ontwerpen 1</h3>
                        Ik wil na mijn stage instaat zijn om de gebruikersinterface van een applicatie te ontwerpen
                    </div>
                    <div className="leerdoel">
                        <h3>Leerdoel Ontwerpen 2</h3>
                        Ik wil na mijn stage instaat zijn om ontwerpkeuzes te motiveren/verduidelijken
                    </div>
                    Van hieruit zal er van de afkortingen LDO1 en LDO2 gebruikt maken om de bovengenoemde leerdoelen te benoemen
                </p>
                <p>
                    <h5>Leerdoel</h5>
                    Dit leerdoel zal gaan over het ontwerpen van (een deel van) software op basis van specificaties.
                </p>
                <p>
                    Voor LDO1 is er gebruikt gemaakt van de online tool: wireframes.cc.
                </p>
                <p>
                    <Wireframe/>
                </p>
                <p>
                    De keuze is gedaan om de volgende redenen:
                    <ul>
                        <li>Laat toe simpele gebruikersinterfaces te ontwerpen</li>
                        <li>Door een Link optie is het mogeljk om een website met meerdere paginas te simuleren</li>
                        <li>Ontwerptijd te verminderen: in het team was er een UI-stagaire aanwezig die verantwoordelijk was voor het maken van de gebruikers interface</li>
                    </ul>
                </p>
                <p>
                    <h5>Leerdoel Bewijs</h5>
                    Om dit leerdoel te behalen is er voor de Digitale Koopjeshoek een gebruikersinterface ontworpen. Dit ontwerp neemt de eisen en adviesen mee van de vorige leerdoelen.
                </p>
                <p>
                    In het bewijs is LDO2 verwerkt. Het bewijs van LDO2 zal de motivatie bevatten van het gebruikersinterface ontwerp. Voor de duidelijkheid zal dit aangegeven worden met <strong>[LDO2]</strong>
                </p>
            </Row>
            <Row>
                <h5>Documentatie</h5>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Gebruikersinterface Ontwerp en Motivatie
                        </Accordion.Header>
                        <Accordion.Body>
                            <Design/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <br/>
            <br/>
        </Container>
    )
}