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
                  Tijdens de stage is er gebruik gemaak van de volledige functionaliteit van Figma. Een van deze functionaliteiten is: Wireframes. Deze functionaliteit liet de UX-stagaire toe om voor verschillende apparaten (namelijk mobiel, ipad/tablets en laptops) ontwerpen te maken.
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
                                  Er is gekozen voor dit leerdoel om mijn programmeerskills te verbeteren.
                              </p>
                              <p>
                                  Bij dit leerdoel heeft de leerdoel analyseren bijgedragen. Door het kunnen lezen en begrijpen van door anderen ontwikkelde coderegels ben ik beter in staat zelf coderegels te schrijven. Verder heeft het werken aan dit leerdoel ervoor gezorgd:
                                  <ul>
                                      <li>
                                          Het lezen, begrijpen en vertalen van kwaliteitseisen en ontwerpen
                                      </li>
                                      <li>
                                          Leren, beheersen en gebruiken van nieuwe tools, technieken en talen
                                      </li>
                                  </ul>
                              </p>
                              <p>
                                  De inzet bij dit leerdoel was:
                                  <ul>
                                      <li>
                                          Lezen, begrijpen en toepassen van kwaliteitseisen en ontwerpen
                                      </li>
                                      <li>
                                          Lezen, begrijpen en toepassen van coderingsregels (code standaarden) van zowel de programmeertalen als AH Tech Labs
                                      </li>
                                      <li>
                                          Het leren, beheersen en gebruiken van nieuwe technieken, talen en tools
                                      </li>
                                  </ul>
                                  Het is mij gelukt om coderegels op te leveren die voldoen aan de eisen en standaarden van AH Tech Labs.
                              </p>
                              <p>
                                      Van de tools, technieken en talen zal/zou ik hergebruiken:
                                      <ul>
                                          <li>
                                              Github en alle genoemde functionaliteiten: Voor het toepassen van CI/CD
                                          </li>
                                          <li>
                                              Jira-borden: Voor het beheren van de projectvoortgang, ookal duurde het een tijdje voor ik door had hoe deze werkte.
                                          </li>
                                          <li>
                                              Commandprompt: Deze gebruikte ik al voor ik begon met mijn stage. En zal deze ook na mijn stage gebruiken. Voor het o.a. bouwen, pushen en releasen van code/applicaties
                                          </li>
                                          <li>
                                              Intellij IDEA: Deze gebruikte ik ook voor mijn stage. Deze zal ik ook gebruiken na mijn stage. Intellij IDEA is een prettige ontwikkelings omgeving die tevens ook veel functionaliteiten levert waaronder: contextuele problemen aangeven, auto correcties, etc.
                                          </li>
                                          <li>
                                              Lean Start-Up: Deze werkmethodiek zou ik hanteren als er een product/applicatie ontwikkelt moet worden voor een startup bedrijf.
                                          </li>
                                          <li>
                                              React: Een goed framework dat het ontwikkelen van de frontend bevordert. Dit is ook gebruikt voor dit verslag (website).
                                          </li>
                                          <li>
                                              JavaScript: Voor frontend ontwikkeling is JavaScript praktisch verplicht.
                                          </li>
                                          <li>
                                              TypeScript: Levert meer functionaliteiten dan JavaScript en is ook makkelijker in gebruik.
                                          </li>
                                      </ul>

                                      Wat ik niet zou gebruiken is:
                                      <ul>
                                          <li>
                                              AH Template: deze template is eigendom van Albert Heijn. Indien ik deze gebruik kan ik een boete krijgen.
                                          </li>
                                      </ul>
                              </p>
                              <p>
                                  Van alle bovengenoemde tools, technieken en talen heb ik de volgende problemen mee gehad:
                                  <ul>
                                      <li>
                                          JavaScript en TypeScript: het maken van componenten en ook het gebruiken van de gemaakte componenten.
                                      </li>
                                      <li>
                                          Github: Voornamelijk Github Pull Requests: Hierin waren vaak opmerkingen te vinden maar ik had pas later door dat je de opmerkingen kon "oplossen". Door een opmerking op te lossen geef je aan dat de opmerking is verwerkt en de code is aangepast.
                                      </li>
                                      <li>
                                          Jira-borden: Hoe deze werken en hoe deze te lezen.
                                      </li>
                                  </ul>
                              </p>
                              <p>
                                  De vorderingen die ik heb gemaakt bij dit leerdoel zijn:
                                  <ul>
                                      <li>
                                          Het hanteren en toepassen van coderingsregels (van de programmeertaal en bedrijf)
                                      </li>
                                      <li>
                                          Het leren en gebruiken van nieuwe tools, technieken en talen.
                                      </li>
                                  </ul>
                                  Deze vorderingen zijn onstaan door de tools, technieken en talen die ik heb moeten gebruiken en beheersen tijdens de stage. Deze zijn tot ontwikkeling gekomen om kwalitatieve code en werk te leveren.
                              </p>
                              <p>
                                  Ik zal al deze vorderingen meenemen in mijn volgende stage/werkvloer. Deze vorderingen zullen mij helpen om de standaarden, tools, technieken en talen van het bedrijf te beheersen.
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