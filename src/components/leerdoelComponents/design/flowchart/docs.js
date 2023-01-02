import React from "react";
import {Container} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineFlag} from "react-icons/ai";
import {FaFlagCheckered} from "react-icons/fa";
import {MdDraw, MdOutlineDeveloperBoard} from "react-icons/md";

import Flowdiagram from '../_docs/_img/flowchart.png';


export const Flows = () => {
    const white = 'rgb(255, 255, 255)';
    return (
        <Container>
            <VerticalTimeline
                layout={"1-column-left"}
                lineColor={"grey"}
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ display: `none` }}
                    iconStyle={{ display: 'none'}}
                >
                    <p>
                        Wegens een geheimhoudings verklaring met de Albert Heijn kan het zijn dat er weinig tot geen beeld materiaal aanwezig is bij de documentatie. Ook kan het zijn dat informatie is weggelaten.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: `7px solid  black`}}
                    iconStyle={{ background: `${white}`}}
                    icon={<AiOutlineFlag/>}
                />

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<MdOutlineDeveloperBoard/>}
                >
                    <h3 className="vertical-timeline-element-title">Stroomdiagram</h3>
                    <h6 className="vertical-timeline-element-subtitle">Digitale Koopjeshoek</h6>
                    <p>
                        Om de stroomdiagram te maken is er informatie verzameld over de processen/algoritmes van Digitale Koopjeshoek. Deze processen/algoritmes zijn:
                    </p>
                    <p>
                        <ol>
                          <li>
                              Algoritme:
                              <ul>
                                  <li>
                                      Een klant komt aan op de landingspagina van de Digitale Koopjeshoek
                                  </li>
                                  <li>
                                      Deze klant voert vervolgens zijn (huidige) locatie in, vervolgens kiest de klant een radius (1, 5, 10, 15 km). Met de radius geeft de klant aan tot hoever deze bereidt is te reizen. Na het invoeren hiervan worden alle winkels, met een Digitale Koopjeshoek, binnen deze radius opgehaalt
                                      <ul>
                                          <li>
                                              Indien er geen winkels in de gekozen radius zijn zal de klant een foutmelding krijgen.
                                          </li>
                                      </ul>
                                  </li>
                                  <li>
                                      De klant krijgt een lijst met winkels te zien en moet hieruit eentje kiezen.
                                  </li>
                                  <li>
                                      Als de klant een winkel heeft gekozen komt bij de Digitale Koopjeshoek van deze terecht. Hier zal de klant alle Dynamisch Afgeprijsde producten, van de gekozen winkel, zien.
                                      <ul>
                                          <li>
                                              Indien er geen Dynamisch Afgeprijsde producten aanwezig zijn zal de klant een foutmelding krijgen.
                                          </li>
                                      </ul>
                                  </li>
                                  <li>
                                      Als de klant een product kiest zal deze de productinformatie krijgen en de melding dat de korting alleen geldig is bij de gekozen winkel.
                                  </li>
                              </ul>
                          </li>
                            <li>
                                Processen:
                                <ul>
                                    <li>
                                        Ophalen van Winkels: Winkels die meedoen aan Dynamisch Afprijzen ophalen, uit een Database, als een klant zijn huidige locatie en radius heeft ingevoerd
                                    </li>
                                    <li>
                                        Ophalen van Afgeprijsde Producten: Afgeprijsde producten van een gekozen winkel ophalen,  uit een Database, voor de klant.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </p>
                    <p>
                        De bovengenoemde algoritme is als groep samengesteld.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<MdDraw/>}
                >
                    <h3 className="vertical-timeline-element-title">Stroomdiagram Visualisatie</h3>
                    <h6 className="vertical-timeline-element-subtitle">Digitale Koopjeshoek</h6>
                    <p>
                        De stroomdiagram is al volgt gevisualiseert. (Deze is ook als pdf bestand toegevoegd bij de bijlages)
                    </p>
                    <p>
                        <img className={"voorraad"} src={Flowdiagram} alt={"Stroomdiagram van Digitale Koopjeshoek"}/>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: `7px solid  black`}}
                    iconStyle={{ background: `${white}`}}
                    icon={<FaFlagCheckered/>}
                />
            </VerticalTimeline>
        </Container>
    )
}