import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import {Figma} from "../_docs/definitions";
import {QualityDoc} from "../_docs/documentation";
import {feedback, realise} from "../../../../constants/content";

export const Quality = () => {
    return (
      <Container className={"containerStyle"}>
          <Row>
              <h2>Leerdoel: Realiseren</h2>
              <div className="leerdoel">
                  {realise.leerdoel1}
              </div>
          </Row>
          <Row>
              <p>
                  Dit leerdoel gaat over het realiseren van een (deel van een) ICT-systeem op basis van een ontwerp.
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
          <br/>
          <Row>
              <h5>Feedback en Reflectie</h5>
              <Accordion>
                  <Accordion.Item eventKey="0">
                      <Accordion.Header>
                          Feedback en Reflectie
                      </Accordion.Header>
                      <Accordion.Body>
                          <Row>
                              <h5>Feedback Stagebegeleider</h5>
                              <div className={"leerdoel"}>
                                  {feedback.leerdoel7}
                              </div>
                          </Row>
                          <Row>
                              <p>
                                  Er is gekozen voor dit leerdoel om mijn programmeerskills te verbeteren. Als gevolg hiervan wordt de code die ik ontwikkel beter.
                              </p>
                              <p>
                                  Bij dit leerdoel is heeft de leerdoel analyseren bijgedragen. Door het begrijpen van anderen hun code ben ik een betere programmeur geworden. Verder heeft het werken aan dit leerdoel ervoor gezorgd:
                                  <ul>
                                      <li>
                                          Het nauwkeurig lezen van de kwaliteitseisen en ook de ontwerpen
                                      </li>
                                      <li>
                                          Leren en beheersen van nieuwe tools, technieken en talen
                                      </li>
                                  </ul>
                              </p>
                              <p>
                                  De inzet bij dit leerdoel was:
                                  <ul>
                                      <li>
                                          Doornemen, begrijpen en toepassen van kwaliteitseisen
                                      </li>
                                      <li>
                                          Doornemen, begrijpen en toepassen van coderingsregels (code standaarden) van zowel de programmeertalen als AH Tech Labs
                                      </li>
                                      <li>
                                          Het leren en beheersen van nieuwe technieken, talen en tools
                                      </li>
                                  </ul>
                                  Door deze inzet is het mij gelukt om code op te leveren die voldeden aan de eisen en standaarden van AH Tech Labs. Hierom beoordeel ik mijn inzet als goed.
                              </p>
                          </Row>
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </Row>
          <br/>
      </Container>
    );
}