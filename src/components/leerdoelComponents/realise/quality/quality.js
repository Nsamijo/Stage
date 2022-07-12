import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import {Figma} from "../_docs/definitions";
import {QualityDoc} from "../_docs/documentation";

export const Quality = () => {
    return (
      <Container>
          <Row>
              <p>
                  <h5>Leerdoel</h5>
                  <p>
                      Dit leerdoel gaat over het realiseren van een (deel van een) ICT-systeem op basis van een ontwerp.
                  </p>
              </p>
              <p>
                  Voor elk applicatie van AH Tech Labs  wordt er eerst een design gemaakt door een UI-stagaire. Deze wordt dan gebruikt door de IT-stagaires als blauwdruk voor het ontwikkelen van onder andere de gebruikersinterface.
              </p>
              <p>
                  In AH Tech Labs is er gebruik gemaakt van de online tool: Figma.
                  <Figma/>
              </p>
              <p>
                  Tijdens de stage is er voornamelijk gebruik gemaak van de wireframe functionaliteit. Deze functionaliteit liet de UI-stagaire toe om voor verschillende apparaten (mobiel, ipad/tablets en laptops) ontwerpen te maken.
              </p>
              <p>
                  <h5>Leerdoel Bewijs</h5>
                  <p>
                      Voor dit leerdoel is er eerst gezocht naar wat de kwaliteitseisen zijn. Deze zijn onder andere:
                      <ul>
                          <li>Het ontwerp in Figma</li>
                          <li>Kwaliteitseisen van de taak (feature) vermeld in Jira (Manage en Control)</li>
                      </ul>
                      Nadat de kwaliteitseisen duidelijk vastgelegd waren kon er gewerkt worden aan de taken (features). In onderstaande documentatie zijn er foto's van de kwaliteitseisen en ontwikkelde code opgenomen.
                  </p>
              </p>
          </Row>
          <Row>
              <h5>Documentatie</h5>
              <Accordion>
                  <Accordion.Item eventKey={"0"}>
                      <Accordion.Header>
                          Documentatie Code Ontwikkeling
                      </Accordion.Header>
                      <Accordion.Body>
                          <QualityDoc/>
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </Row>
      </Container>
    );
}