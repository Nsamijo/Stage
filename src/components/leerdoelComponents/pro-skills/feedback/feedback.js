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
                          </Row>
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </Row>
          <br/>
      </Container>
    );
}