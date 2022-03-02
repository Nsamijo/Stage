import {Accordion, Container, Row} from "react-bootstrap";
import {FeedbackUitleg} from "../_docs/documentatie";
import {FeedbackTimeline} from "../../_documentation/pro-skills/docs";

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
                  Hier uit is de conclusie dat feedback een reactie is van derden op eigen acties of gedrag. Maar het belangrijkste zijnde dat feedback, zowel positief als negatief, gebruikt moet worden om te groeien. Met dit in het hoofd houden is de ontvangen stage feedback geanalyseerd en toegepast in de dagelijkse acties of gedrag
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