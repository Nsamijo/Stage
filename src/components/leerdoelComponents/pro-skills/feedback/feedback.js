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
                                  Voor dit leerdoel heb ik op advies van mijn stagebegeleider vrij recent feedback gevraagd bij een aantal mede-stagaires. De ontvangen feedback heb ik verwerkt in dit verslag.
                              </p>
                              <p>
                                  Mijn aanpak van dit leerdoel was niet effectief. Op basis van de ontvangen feedback ben ik tot de volgende conclusies gekomen:
                                  <ul>
                                      <li>
                                          Communicatie is niet mijn sterkste punt. Ik zal hier veel meer aandacht en energie in moeten steken.
                                      </li>
                                      <li>
                                          Ik moet eerder vragen stellen als ik iets niet weet of over twijfel. Gevolg van het te lang wachten van stellen van vragen is dat ik mijn deadlines niet haal of dat ik een product oplever wat niet aan de verwachtingen voldoet.
                                      </li>
                                      <li>
                                          Ik zal actiever moeten deelnemen in teamsoverleggen en/of bij het werken in teams.
                                      </li>
                                      <li>
                                          Ik zal een actievere houding aannemen.
                                      </li>
                                  </ul>
                              </p>
                              <p>
                                  <h5>Reflectie</h5>
                                  <p>
                                      Voor mijzelf heb ik de 10 volgende punten op een rijtje gezet om de feedback te kunnen verwerken en te werken aan mijn eigen ontwikkeling:
                                      <ol>
                                          <li>
                                              Op tijd aanwezig zijn: het tijdig en duidelijk communiceren of ik wel of niet aanwezig zou zijn. Of het melden als ik te laat zal/zou zijn.
                                          </li>
                                          <li>
                                              Werk attitude: op basis van de feedback is er weinig op te merken over mijn werk attitude.
                                          </li>
                                          <li>
                                              Inspanning: ik doe mijn uiterste best om de opdrachten uit te voeren echter indien er onduidelijkheden zijn doe ik er te lang over om vragen te stellen.
                                          </li>
                                          <li>
                                              Energie: op basis van de ontvangen feedback denk ik dat ik voldoende energie hebt getoond. Ik had mijn energie beter kunnen benutten door niet lang door te hammeren op een taak inplaats van hulp te vragen.
                                          </li>
                                          <li>
                                              Bodylanguage: ik ben mij ervan bewust dat duidelijk merkbaar is dat ik moeite heb met feedback. Het duurt even voordat ik door heb dat ik niet aangevallen wordt als persoon maar dat men het beste met mij voor heeft.
                                          </li>
                                          <li>
                                              Passie: ik wil alles zo goed mogelijk en zelfstandig doen. In teamverband kan dit negatief uitpakken.
                                          </li>
                                          <li>
                                              Een extra stap zetten: ik ben mij ervan bewust naar aanleiding van deze stage en de feedback die ik heb ontvangen dat ik meer energie moet steken in mijn theoretische kennis. Dat ik mij open moet stellen voor feedback. Dat ik vragen moet durven stellen c.q. door moet blijven vragen om een goed beeld te krijgen van wat van mij verwacht wordt.
                                          </li>
                                          <li>
                                              Voorbereid zijn: Om goed voorbereid te zijn moet ik mij inlezen in de materie en informatie opzoeken over de zaken waar ik nog weinig of niets van afweet. Dit is voor mij een aandachtspunt.
                                          </li>
                                          <li>
                                              Openstaan voor coaching: ik verwijs hierbij naar aandachtspunt Bodylanguage. Om gecoached te kunnen worden zal ik oude gewoontes en gedrag moeten veranderen. Dit is een proces dat enige tijd zal duren.
                                          </li>
                                          <li>
                                              Attitude: ik moet mij bewust zijn van de nut en de noodzaak om mij attitude te veranderen om mijn doelen te bereiken. Echter moet ik dan duidelijker doelen stellen.
                                          </li>
                                      </ol>
                                  </p>
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