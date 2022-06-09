import {Accordion, Container, Row} from "react-bootstrap";
import {FeedbackUitleg} from "../_docs/definitie";
import {FeedbackTimeline} from '../_docs/documentatie';

export const Feedback = () => {
    return (
      <Container>
          <Row>
              <p>
                  <h5>Leerdoel</h5>
                  <p>
                      Bij dit leerdoel gaat het over de skills die zijn opgedaan tijdens de stage
                  </p>
              </p>
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
                      Voor dit leerdoel is gedurende de stage alle feedback verzameld en genoteerd. Ook is genoteerd de verandering die de feedback heeft opgebracht.
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
      </Container>
    );
}