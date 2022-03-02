import {Accordion, Container, Row} from "react-bootstrap";
import {Aansturing} from "../../_documentation/pro-skills/docs";

export const ZelfStandig = () => {
    return(
      <Container>
          <Row>
              <p>
                  <h5>Leerdoel</h5>
                  <p>
                      Dit leerdoel gaat over de skills die zijn opgedaan tijdens de stage.
                  </p>
              </p>
              <p>
                  Tijdens de stage is er gewerkt in groepsverband. Gebruik makend van een werkmethodologie en diverse online tools voor het beheren van de projecten. Gedurende de stage is er ook individueel te werk gegaan. Als student op de schoolbanken is zelfaansturing op een laag pitje geweest en was dit nogal een nieuw manier van werken.
              </p>
              <p>
                  Onafhankelijk is er besloten welke taken te doen, Pull Request door te nemen, feedback te leveren. Om aan te geven welke taken welke taken zijn opgepakt moet de individu zichzelf toevoegen daaraan. Na het afronden van een taak wordt om de 2 weken een meeting gehouden om de voortgang en afgeronde taken te bespreken. Pas na expliciete goedkeuring van de stagebegeleider wordt een taak genoteerd als af.
              </p>
              <p>
                  <h5>Leerdoel Bewijs</h5>
                  <p>
                      Voor dit leerdoel is de zelfaansturing gedocumenteerd door van de Jira taken een aantal screenshots te maken.
                  </p>
              </p>
          </Row>
          <Row>
              <h5>Documentatie</h5>
              <Accordion>
                  <Accordion.Item  eventKey={"0"}>
                      <Accordion.Header>
                          Documentatie Zelf-Aansturing
                      </Accordion.Header>
                      <Accordion.Body>
                          <Aansturing/>
                      </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
          </Row>
      </Container>
    );
}