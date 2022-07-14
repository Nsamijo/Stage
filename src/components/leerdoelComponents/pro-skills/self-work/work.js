import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import {Aansturing} from "../_docs/documentatie";
import {feedback, skills} from "../../../../constants/content";

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
                  Tijdens de stage is er gewerkt in groepsverband (in teams). Er is gebruikt gemaakt van een werkmethodologie en diverse online tool voor o.a. het beheren van projecten. Gedurende de stage moest ik ook zelfstandig te werk gaan. Ik moest zelfstandig mijn dag indelen (b.v. Pull Request door nemen en feedback leveren). Ik kon zelfstandig bepalen welke taken ik zou oppakken. Dit werd vastgelegd in Jira. Om de 2 weken werd er vergadert om de voortgang te bespreken. Na goedkeuring van de stagebegeleider wordt een taak genoteerd als afgehandelt.
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
                          <Row>
                              <h5>Feedback Stagebegeleider</h5>
                              <div className={"leerdoel"}>
                                  {feedback.leerdoel10}
                              </div>
                          </Row>
                          <Row>
                              <p>
                                  Er is gekozen om aan dit leerdoel te werken om zelfstandig te zijn. In staat zijn om mezelf aan te sturen.
                              </p>
                              <p>
                                  In het begin van stage was het moeilijk om zelf een taak op te pakken en af te ronden. Dit kwam door de tekort aan kennis over de tools en programmeertalen. Na de eerste maand kon ik dit beter doen en na de tweede maand werkte ik geheel zelfstandig. Deze zelfstandigheid kwam door een betere begrip en kennis over de gebruikte tools en programmeertalen.
                              </p>
                              <p>
                                  Met een vertraagde start op zelfstandigheid was ik bang dat ik dit leerdoel niet zou behalen. Maar gezien de vorderingen die ik heb gemaakt en het werk dat ik heb opgeleverd ben ik tevreden. Hierom geef ik mezelf een voldoende.
                              </p>
                              <p>
                                  Vanuit mijn mede-stagaires kreeg ik vaak de feedback dat bepaalde componenten niet pixel perfect waren. Hierdoor moest ik geregeld in frontend componenten en/of stijlings aanpassingen aanbrengen.
                                  <p>
                                      Uit deze feedback kan geconcludeerd worden dat ik nauwkeuriger moest zijn bij het verrichten van mijn werkzaamheden. Ik ben aan de slag gegaan met deze feedback door bij het openen van Pull Requests te vragen of de componenten en stijlen goed verwerkt waren.
                                  </p>
                              </p>
                              <p>
                                  Ik heb zoveel mogelijk getracht om naar aanleiding van deze stage en de feedback die ik ontvangen heb kritisch naar mezelf te kijken. Zie voorgaande 10 punten.
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