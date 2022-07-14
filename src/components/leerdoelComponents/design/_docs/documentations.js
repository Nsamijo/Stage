import React from 'react';
import {Container} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";


import landing from "./_img/landing.png";
import store from "./_img/allproducts.png";
import product from "./_img/product.png";

import './_documentation.css';
import {AiOutlineFlag} from "react-icons/ai";
import {FaFlagCheckered} from "react-icons/fa";

export const Design = () => {
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
                    // icon={<HiOutlineClipboardList/>}
                >
                    <h3 className="vertical-timeline-element-title">Ontwerp Maken</h3>
                    <h6 className="vertical-timeline-element-subtitle">Eisen van het ontwerp</h6>
                    <p>
                        De eisen van de gebruikersomgeving ontwerp zijn:
                        <ul>
                            <li>
                                De locatie van de klant ophalen: hiermee kan de afstand tussen klant en winkel bepaald worden
                            </li>
                            <li>
                                Tonen van afgeprijsde producten per winkel
                            </li>
                            <li>
                                Korting tonen van de afgeprijsde producten
                            </li>
                            <li>
                                Klant inlichten over de voorraad verschil
                            </li>
                        </ul>
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    // icon={<HiOutlineClipboardList/>}
                >
                    <h3 className="vertical-timeline-element-title">Het Ontwerp</h3>
                    <h6 className="vertical-timeline-element-subtitle">De gebruikersomgeving in Wireframe.cc</h6>
                    <p>
                        <h5>Landingspagina van de klant</h5>
                        <strong>[LDO1]</strong>
                        <img src={landing} className={"images"} alt={"De eerste pagina die de klant ziet"}/>
                        <p>
                            <strong>[LDO2]</strong>
                        </p>
                        <p>
                            Motivatie ontwerp:
                            <ul>
                                <li>
                                    De locatie van de klant ophalen: hiermee kan de afstand tussen klant en winkel bepaald worden
                                </li>
                            </ul>
                            <p>
                                Een klant zal deze pagina te zien krijgen als deze de Digitale Koopjeshoek bezoekt
                            </p>
                            <p>
                                Een klant kan zijn adres invoeren in de zoekbalk. Dit is gedaan om te voldoen aan het cookiebeleid van Albert Heijn.
                            </p>
                            <p>
                                Na het invoeren van het adres/locatie worden de winkels in de omgeving getoond. De klant kan een keuze maken door op de sorteer knop (knop met 2 driehoeken) te drukken. De sorteer knop heeft de volgende opties:
                                <ul>
                                    <li>
                                        Afstand oplopend
                                    </li>
                                    <li>
                                        Afstand aflopend
                                    </li>
                                </ul>
                            </p>
                            <p>
                                Het zal voor een klant niet mogelijk zijn om afgeprijsde producten op te zoeken. Deze keuze is gedaan vanwege de beperkingen van de software Dynamisch Afprijzen.
                            </p>
                        </p>
                    </p>
                    <p>
                        <h5>Productenoverzicht van alle afgeprijsde producten van de geselecteerde winkel</h5>
                        <strong>[LDO1]</strong>
                        <img src={store} className={"images"} alt={"Overzicht van alle afgeprijsde producten"}/>
                        <p>
                            <strong>[LDO2]</strong>
                        </p>
                        <p>
                            Motivatie Ontwerp:
                            <ul>
                                <li>
                                    Tonen van afgeprijsde producten per winkel
                                </li>
                                <li>
                                    Korting tonen van de afgeprijsde producten
                                </li>
                                <li>
                                    Klant inlichten over mogelijkheid dat afgeprijsde product niet meer beschikbaar kon zijn
                                </li>
                            </ul>
                            <p>
                               Een klant komt op deze pagina na het invoeren van zijn locatie en het selecteren van een winkel.
                            </p>
                            <p>
                                <h6>Adresbalk</h6>
                                De klant ziet in de eerste balk het adres van de gekozen winkel terug. Dit is gedaan om de klant te informeren van welke winkel de getoonde afgeprijsde producten zijn. In dezelfde balk is er een Terug-knop verwerkt. Bij het klikken op de terug knop zal de klant terug naar de Landings-pagina gebracht worden
                            </p>
                            <p>
                                <h6>Disclaimer</h6>
                                De disclaimer is meteen onder de adresbalk geplaats. De disclaimer bevat informatie over de mogelijkheid dat het product niet meer beschikbaar kon zijn op de betreffende locatie.
                            </p>
                            <p>
                                <h6>Sorteer knop</h6>
                                De sorteer knop bevindt zicht naast de disclaimer. Deze knop zal de klant toelaten om de afgeprijsde producten te sorteren op kenmerken zoals kortingspercentage, etc.
                            </p>
                            <p>
                                <h6>Afgeprijst product</h6>
                                Een afgeprijst product wordt getoond met een:
                                <ul>
                                    <li>Productfoto</li>
                                    <li>Huidig kortingpercentage op het product</li>
                                    <li>Tenminste-Houdbaar-Tot (THT) datum van het product</li>
                                    <li>De nieuwe prijs van het product</li>
                                </ul>
                                Een product kan gekozen worden om meer informatie te verkrijgen over de korting.
                            </p>
                        </p>
                    </p>
                    <p>
                        <h5>Overzicht van een geselecteerd product</h5>
                        <strong>[LDO1]</strong>
                        <img src={product} className={"images"} alt={"Productoverzicht"}/>
                        <p>
                            <strong>[LD02]</strong>
                        </p>
                        <p>
                            Motivatie Ontwerp:
                            <ul>
                                <li>
                                    Korting tonen van de gekozen afgeprijst product
                                </li>
                                <li>
                                    Klant inlichten over de mogelijkheid dat het product eventueel niet meer op voorraad is
                                </li>
                                <li>
                                    Klant informeren dat de korting alleen voor de geselecteerde winkel geldt
                                </li>
                            </ul>
                        </p>
                        <p>
                            De klant komt op deze pagina na het selecteren van een afgeprijst product op de Productenoverzicht-pagina.
                        </p>
                        <p>
                            Op deze pagina kan de klant zijn geselecteert product zien. Om terug te gaan naar de Productenoverzicht-pagina moet de Terug-knop activeerd worden.
                        </p>
                        <p>
                            De pagina bevat verder:
                            <ul>
                                <li>Een foto van het geselecteert product</li>
                                <li>Algemene product-informatie</li>
                                <li>Prijs zonder korting</li>
                                <li>Kortingpercentage</li>
                                <li>Prijs met korting</li>
                                <li>Informatie over de korting: de afprijsing is alleen geldig voor de geselecteerde winkel. Het is mogelijk dat het geselecteerde product niet meer op voorraad is.</li>
                            </ul>
                        </p>
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
};