import {Accordion, Container, Row} from "react-bootstrap";
import {Leerdoel3} from "../../_documentation/analyse/leerdoel3/leerdoel3";
import {DynamischAfprijzen, Probleemstelling} from "../_docs/defenitions";

const Problem = () => {
    return (
        <Container>
            <Row>
                <p>
                    <h5>Analyseren</h5>
                    <p>
                        Dit leerdoel gaat over het analyseren van processen, producten en informatiestromen in hun onderlinge samenhang en context.
                    </p>
                </p>
                <p>
                    Bij dit leerdoel is er gekozen om de probleemanalyse van Tech Labs te beheersen. Deze probleemanalyse is gezamelijk uitgevoerd met mede-stagaires onder begeleiding vanuit AH Tech Labs en bevat enkele individuele aspecten.
                </p>
                <p>
                    <h5>Probleem Context</h5>
                    Albert Heijn wilt zijn voedselverspilling verminderen en oogt deze omlaag te brengen naar 20 procent in het jaar 2030. Voor dit doel zijn er enkele initiatieven genomen waaronder Dynamisch Afprijzen. Hierbij kreeg AH Tech Labs de volgende probleemstelling binnen:
                </p>
                <p>
                    <Probleemstelling/>
                </p>
                <p>
                    Om de probleemstelling te begrijpen zal er eerst informatie vergaart moeten worden over Dynamisch Afprijzen.
                </p>
                <p>
                    <DynamischAfprijzen/>
                </p>
                <p>
                    <h5>Leerdoel Bewijs</h5>
                    <p>
                        Om dit leerdoel te behalen is er meegedaan aan de probleemanalyses van de stageopdrachten. Van deze is er 1 gedocumenteerd. In de documentatie is een probleemanalyse met bijbehorende conclusies van zowel het individuele en gezamelijke gedeelte.
                    </p>
                </p>
            </Row>
            <Row>
                <Row>
                    <h5>Documentatie</h5>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Probleemuitwerking en Resultaat
                            </Accordion.Header>
                            <Accordion.Body>
                                <Leerdoel3/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Row>
        </Container>
    )
}

export default Problem;