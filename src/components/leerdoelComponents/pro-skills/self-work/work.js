import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import {Aansturing} from "../_docs/documentatie";
import {skills} from "../../../../constants/content";

export const ZelfStandig = () => {
    return(
      <Container>
          <Row>
              <h2>Leerdoel: Professional Skills</h2>
              <div className="leerdoel">
                  {skills.leerdoel2}
              </div>
          </Row>
          <Row>
              <p>
                  <h5>Leerdoel</h5>
                  <p>
                      Dit leerdoel gaat over de vaardigheden die zijn opgedaan tijdens de stage.
                  </p>
              </p>
              <p>
                  <ul>
                      <li>
                          In groepsverband werken
                      </li>
                      <li>
                          Individueel werken
                      </li>
                      <li>
                          Vergaderen
                      </li>
                  </ul>
              </p>
              <p>
                  Tijdens de stage is er gewerkt in groepsverband (in teams). Er is gebruikt gemaakt van een werkmethodologgie en diverse online tool voor o.a. het beheren van projecten. Gedurende de stage moest ik ook zelfstandig te werk gaan. Ik moest zelfstandig mijn dag indelen (b.v. Pull Request door nemen en feedback leveren). Ik kon zelfstandig bepalen welke taken ik zou oppakken. Dit werd vastgelegd in Jira. Om de 2 weken werd er vergadert om de voortgang te bespreken. Na goedkeuring van de stagebegeleider wordt een taak genoteerd als afgehandelt.
              </p>
              <p>
                  <h5>Leerdoel Bewijs</h5>
                  <p>
                      In de documentatie is een voorbeeld opgenomen van het zelfstandig werken.
                  </p>
              </p>
          </Row>
          <Row>
              <h5>Documentatie</h5>
              <Accordion>
                  <Accordion.Item  eventKey={"0"}>
                      <Accordion.Header>
                          Documentatie Zelfstandig Werken
                      </Accordion.Header>
                      <Accordion.Body>
                          <Aansturing/>
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </Row>
          <br/>
          <Row>
              <h5>Feedback en Reflectie</h5>
              <Accordion>
                  <Accordion.Item eventKey="0">
                      <Accordion.Header>
                          Feedback en Reflectie
                      </Accordion.Header>
                      <Accordion.Body>
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </Row>
          <br/>
      </Container>
    );
}