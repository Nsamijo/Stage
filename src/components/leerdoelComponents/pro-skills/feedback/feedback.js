import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import {FeedbackUitleg} from "../_docs/definitie";
import {FeedbackTimeline} from '../_docs/documentatie';
import {feedback, skills} from "../../../../constants/content";

export const Feedback = () => {
    return (
      <Container className={"containerStyle"}>
          <Row>
              <h2>Leerdoel: Professional Skills</h2>
              <div className="leerdoel">
                  {skills.leerdoel1}
              </div>
          </Row>
          <Row>
              <p>
                  <p>
                      Bij dit leerdoel gaat het over de skills die zijn opgedaan tijdens de stage
                  </p>
              </p>
              <ul>
                 <li>Planning</li>
              </ul>
              <p>
                  Tijdens de stage is er feedback ontvangen van zowel de mede stagaires als begeleiders. Om beter de feedback te begrijpen is er gekeken naar wat het woord betekent en waar deze voor dient. Het volgende is er gevonden over feedback:
              </p>
              <p>
                  <FeedbackUitleg/>
              </p>
              <p>
                  Hier uit is de conclusie dat feedback een reactie is van derden op eigen acties of gedrag. Het belangrijkste is dat zowel positief als negatief feedback gebruikt moet worden om te kunnen groeien. Met dit in gedachte houdend heb ik de ontvangen feedback proberen toe te passen in mijn gedrag of acties.
              </p>
              <p>
                  <h5>Leerdoel Bewijs</h5>
                  <p>
                      Voor dit leerdoel is gedurende de stage de meest belangrijke feedback verzameld en genoteerd. Ook benoem ik hier de gedragsverandering die de feedback te weeg heeft gebracht.
                  </p>
              </p>
          </Row>
          <Row>
              <h5>Documentatie</h5>
              <Accordion>
                  <Accordion.Item eventKey={"0"}>
                      <Accordion.Header>
                          Feedback Documentatie
                      </Accordion.Header>
                      <Accordion.Body>
                          <FeedbackTimeline/>
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
                                  {feedback.leerdoel9}
                              </div>
                          </Row>
                          <Row>
                              <p>
                                  Dit leerdoel is gekozen om te groeien in character door middel van de ontvangen feedback.
                              </p>
                              <p>
                                  Tijdens en na mijn stage heb ik feedback ontvangen over mijn gedrag. Ik ben nog steeds bezig om de feedback toe te passen.
                              </p>
                              <p>
                                  Voor dit leerdoel heb ik pas later gevraagd om feedback van anderen. Ook het toepassen van deze feedback gaat niet zoals geplanned. om deze redenen geef ik mijn inzet een matige beoordeling.
                              </p>
                              <p>
                                  Mijn aanpak van dit leerdoel was niet effectief. De reden hiervoor is dat ik nog steeds niet klaar bent met het toepassen van de feedback.
                                  <p>
                                      Met deze inzicht zou ik het volgende anders doen:
                                      <ul>
                                          <li>
                                              Meer uitleg vragen over de feedback. Wat wilt de persoon zien veranderen.
                                          </li>
                                      </ul>
                                  </p>
                              </p>
                              <p>
                                  De grootste feedback die ik heb gehad zijn de volgende:
                                  <ul>
                                      <li>
                                          Mijn communicatie tegenover anderen/derden
                                      </li>
                                      <li>
                                          Passieve houding
                                      </li>
                                  </ul>
                                  Hieruit concludeer ik dat mijn houding en communicatieve skills verbeterd moeten worden. Met deze feedback ben ik begonnen aan het werken aan een actieve houding en beter communciceren naar anderen.
                              </p>
                              <p>
                                  Vorderingen die ik heb gemaakt:
                                  <ul>
                                      <li>
                                          Ik ben beter gaan communiceren naar anderen. Nu is het nog steeds niet geheel wat het moet zijn.
                                      </li>
                                      <li>
                                          Een actievere houding aangenomen.
                                      </li>
                                  </ul>
                              </p>
                              <p>
                                  Deze punten heb ik ontwikkelt omdat andere mede-stagaires vaak zochten naar mij. Vaak was ik bezig met een eigen taak maar had dit niet gecommuniceerd naar de team. Ook had ik een aantal gevallen waar ik mijn afwezigheid niet goed had gecommuniceerd.
                              </p>
                              <p>
                                  In het vervolg zal ik beter communiceren naar anderen en ook een actievere houding.
                              </p>
                              <p>
                                  Dit leerdoel is half bereikt. Om het feit dat mijn communicatieve skills niet zijn wat het meot zijn. Om dit te verbeteren zal ik op een ander stage moment vragen om communicatie trainingen om zo mijn communicatieve skills te verbeteren.
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