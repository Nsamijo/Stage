import {Container} from "react-bootstrap";
import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

import '../read-code/pr.css';
import {AiOutlineFlag} from "react-icons/ai";
import {FaFlagCheckered, FaMicroscope, FaPrescriptionBottleAlt} from "react-icons/fa";
import {RiFolderReceivedLine} from "react-icons/ri";
import {MdNoteAdd, MdReportProblem} from "react-icons/md";
import {GiImpactPoint} from "react-icons/gi";
import {BsFillPersonFill} from "react-icons/bs";

export const Leerdoel3 = () => {
    const white = 'rgb(255, 255, 255)';
    return (
        <>
            <Container className="project">
                <VerticalTimeline layout={"1-column-left"} lineColor={"grey"}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: `7px solid  black`}}
                        iconStyle={{ background: `${white}`}}
                        icon={<AiOutlineFlag/>}
                    />
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
                        contentStyle={{ background: `${white}`, border: 'solid'}}
                        contentArrowStyle={{ display: `none` }}
                        iconStyle={{ display: 'none'}}
                    >
                        <p>
                            Bij dit leerdoel is er gebruikt gemaakt van de probleemanalyse van AH Tech Labs. De probleemanalyse legt de nadruk op:
                            <ul>
                                <li>Hoe doen anderen (concurrenten/andere bedrijven) het?</li>
                                <li>Wat gaat er goed op hun (andere bedrijven) manier?</li>
                                <li>Wat gaat minder goed op hun (andere bedrijven) manier?</li>
                                <li>Welke oplossingen zijn er?</li>
                                <li>Welke valkuilen zijn er?</li>
                            </ul>
                        </p>
                        <p>
                            In de documentatie zal het gebruik van de probleemanalyse en de bevindingen beschreven worden.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `${white}`, border: 'solid'}}
                        contentArrowStyle={{ borderRight: `7px solid  black`}}
                        iconStyle={{ background: `${white}`}}
                        icon={<RiFolderReceivedLine/>}
                    >
                        <h3 className="vertical-timeline-element-title">Probleemstelling Ontvangen</h3>
                        <h6 className="vertical-timeline-element-subtitle">Presentatie Stakeholder</h6>
                        <p>
                            Albert Heijn wil voedselverspilling aanzienlijk verminderen. Hiervoor is het Dynamisch Afprijzen ontwikkelt. Albert Heijn wilt, zo enthousaist mogelijk, zijn klanten hierover laten weten.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `${white}`, border: 'solid'}}
                        contentArrowStyle={{ borderRight: `7px solid  black`}}
                        iconStyle={{ background: `${white}`}}
                        icon={<FaMicroscope/>}
                    >
                        <h3 className="vertical-timeline-element-title">Oplossingen Onderzoeken</h3>
                        <h6 className="vertical-timeline-element-subtitle">Hoe doen anderen het?</h6>
                        <p>
                            Individueel is er onderzoek gedaan naar hoe bedrijven adverteren. Uit het onderzoek kwam naar voren;
                            <ul>
                                <li>Bol.com: heeft een speciale pagina voor aanbiedingen (o.a de <a target={"new"} href={"https://www.bol.com/nl/nl/m/outlet/"}>Outlet</a>)</li>
                                <li>Mediamarkt.nl: heeft een gehele aparte website voor alle tweedehands/geretourneerde producten: <a target={"new"} href={"https://outlet.mediamarkt.nl/"}>Mediamarkt Outlet</a></li>
                            </ul>
                        </p>
                        <p>
                            Bedrijven hebben een aparte pagina voor producten in de aanbiedingen. Albert Heijn hanteert ook deze werkwijze voor producten in de bonus.
                        </p>
                        <p>
                            De andere leden van het team hadden ook het resultaat. Dit resultaat is als basis gebruikt voor het bedenken van de oplossing.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `${white}`, border: 'solid'}}
                        contentArrowStyle={{ borderRight: `7px solid  black`}}
                        iconStyle={{ background: `${white}`}}
                        icon={<MdNoteAdd/>}
                    >
                        <h3 className="vertical-timeline-element-title">Oplossing bepalen</h3>
                        <h6 className="vertical-timeline-element-subtitle">Basis van Oplossing</h6>
                        <p>
                            Albert Heijn kan de klanten enthousiast maken over Dynamisch Afprijzen door alle afgeprijsde producten op een aparte pagina te tonen. Deze pagina zal dan deel zijn van ah.nl. <br/>De pagina kreeg de naam: De Digitale Koopjeshoek.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `${white}`, border: 'solid'}}
                        contentArrowStyle={{ borderRight: `7px solid  black`}}
                        iconStyle={{ background: `${white}`}}
                        icon={<MdReportProblem/>}
                    >
                        <h3 className="vertical-timeline-element-title">Uitdagingen en/of Problemen</h3>
                        <h6 className="vertical-timeline-element-subtitle">Wat zijn mogelijke uitdagingen/problemen?</h6>
                        <p>
                            Individueel wordt er gekeken welke uitdagingen/problemen. Na het bedenken van mogelijke uitdagingen/problemen zijn ze gegroupeerd op basis van onderstaande indeling:
                            <ol>
                                <li><b>Context:</b> De voorraad van de Koopjeshoek is niet altijd accuraat. Oorzaak hiervan is de hoeveelheid data die verwerkt moet worden vanuit de vele winkels.
                                    <ul>
                                        <li><b>Uitdaging:</b> Hoe kan dit getoond/verbeterd worden?</li>
                                    </ul>
                                </li>
                                <li><b>Context:</b> De Koopjeshoek is winkel specifiek. Dit houd in dat afgeprijsde producten alleen te vinden zijn in de winkel waar de producten zijn afgeprijsd.
                                    <ul>
                                        <li><b>Uitdaging:</b> Hoe moeten de afgeprijsde producten gepresenteerd worden?</li>
                                    </ul>
                                </li>
                            </ol>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `${white}`, border: 'solid'}}
                        contentArrowStyle={{ borderRight: `7px solid  black`}}
                        iconStyle={{ background: `${white}`}}
                        icon={<FaPrescriptionBottleAlt/>}
                    >
                        <h3 className="vertical-timeline-element-title">Oplossingen voor Uitdagingen/Problemen</h3>
                        <h6 className="vertical-timeline-element-subtitle">Hoe kan de uitdaging/probleem worden aangepakt?</h6>
                        <p>
                            In teamverband is er nagedacht over oplossingen voor de uitdagingen:
                            <ol>
                                <li>
                                    Hoe kan een niet-accurate voorraad getoond/verbeterd worden?
                                    <ul>
                                        <li>Bij elk product kan de laatste update tijd vermeld worden</li>
                                        <li>Een disclaimer die aangeeft dat de producten in de Koopjeshoek niet meer op voorraad kunnen zijn</li>
                                    </ul>
                                </li>
                                <li>Hoe moeten de afgeprijsde producten getoond worden?
                                    <ul>
                                        <li>Aangezien de afgeprijsde producten gebonden zijn aan een winkel is het logisch om deze te tonen per winkel. Hierbij kan dan de klant per winkel inzien wat is afgeprijsd. De klant zou dan zijn locatie kunnen invoeren en alle supermarkten, in een bepaald radius, zien die een Koopjeshoek hebben</li>
                                    </ul>
                                </li>
                            </ol>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `${white}`, border: 'solid'}}
                        contentArrowStyle={{ borderRight: `7px solid  black`}}
                        iconStyle={{ background: `${white}`}}
                        icon={<GiImpactPoint/>}
                    >
                        <h3 className="vertical-timeline-element-title">Impact en Moeite</h3>
                        <h6 className="vertical-timeline-element-subtitle">Ordening van Functionaliteiten</h6>
                        <p>
                            Na het bepalen van de oplossingen worden deze omgezet naar functionaliteiten. Deze zijn gesorteerd op:
                            <ul>
                                <li>
                                    Impact
                                    <ul>
                                        <li>Hoe belangrijk is de functionaliteit voor de klant?</li>
                                    </ul>
                                </li>
                                <li>
                                    Moeite
                                    <ul>
                                        <li>Hoeveel moeite is het om de functionaliteit te ontwikkelen?</li>
                                    </ul>
                                </li>
                            </ul>
                        </p>
                        <p>
                            <b>Moeite (gesorteerd van moeilijk naar makkelijk):</b>
                            <ul>
                                <li>Locatie van de klant ophalen</li>
                                <li>Tonen van afgeprijsde producten per winkel</li>
                                <li>Korting tonen per product</li>
                                <li>Voorraad verschil</li>
                            </ul>
                        </p>
                        <p>
                            <b>Impact (gesorteerd van veel impact naar weinig impact):</b>
                            <li>Locatie van de klant ophalen</li>
                            <li>Tonen van afgeprijsde producten per winkel</li>
                            <li>Voorraad verschil</li>
                            <li>Korting tonen per product</li>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `${white}`, border: 'solid'}}
                        contentArrowStyle={{ borderRight: `7px solid black` }}
                        iconStyle={{ background: `${white}`}}
                        icon={<BsFillPersonFill/>}
                    >
                        <h3 className="vertical-timeline-element-title">Persoonlijke Bijdrage</h3>
                        <h6 className="vertical-timeline-element-subtitle">Wat ik heb gedaan tijdens de Probleemanalyse</h6>
                        <br/>
                        <table>
                            <tr>
                                <th>
                                    Stap Probleemanalyse
                                </th>
                                <th>
                                    Persoonlijke Bijdrage (Uitvoering)
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    Probleemstelling Ontvangen
                                </td>
                                <td>
                                    <p>
                                    Bij de presentatie van de probleemstelling heb ik notities gemaakt. De notities zijn:
                                    <ul>
                                        <li>
                                            Probleemstelling: Hoe kan Albert Heijn zijn klanten, zo enthousiast mogelijk, over Dynamisch Afprijzen laten weten?
                                        </li>
                                        <li>
                                            Steekwoorden:
                                            <ul>
                                                <li>
                                                    Huidige afprijzing - 35%
                                                </li>
                                                <li>
                                                    Dynamisch Afprijzen - 20% tot 70%
                                                </li>
                                                <li>
                                                    Oplopende kortingspercentage
                                                </li>
                                                <li>
                                                    Voedselverspilling voorkomen
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <br/>
                                    De conclusie die ik hieruit trok was: De Albert Heijn wilt consumenten informeren over het Dynamisch Afprijzen. Voor de klant moet het duidelijk zijn dat de kortingspercentage kan oplopen tot 70%. Verder moet het voor de consument duidelijk worden dat Albert Heijn actief voedselverspilling probeert voor te komen. En dat de consument hier een bijdrage aan kan leveren.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Oplossingen Onderzoeken
                                </td>
                                <td>
                                    <p>
                                        Bij deze stap is er door een ieder onderzocht wat andere bedrijven doen tegen (voedsel)verspilling. Hiervoor had een ieder 15 minuten de tijd.
                                    </p>
                                    <p>
                                        Hier is er gekeken naar hoe andere merken/winkels het doen. Ik heb ervoor gekozen om te kijken naar hoe Bol.com en Mediamarkt tegen verspilling.
                                    </p>
                                    <p>
                                    De resultaten van het onderzoek zijn:
                                    <ul>
                                        <li>Bol.com: heeft een speciale pagina voor aanbiedingen (o.a de <a target={"new"} href={"https://www.bol.com/nl/nl/m/outlet/"}>Outlet</a>)</li>
                                        <li>Mediamarkt.nl: heeft een gehele aparte website voor alle tweedehands/geretourneerde producten: <a target={"new"} href={"https://outlet.mediamarkt.nl/"}>Mediamarkt Outlet</a></li>
                                    </ul>
                                    </p>
                                    <p>
                                        Mijn conclusie: Op basis van mijn onderzoek naar hoe Bol.com en Mediamarkt omgaan met verspilling ben ik tot de conclusie gekomen dat een aparte software-oplossing (webpagina) zou moeten kiezen.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Oplossing Bepalen
                                </td>
                                <td>
                                    <p>
                                        Bij deze stap is een ieder samengekomen om de gevonden oplossingen te bespreken. Het doel hierbij is om te bepalen welke oplossing het beste past bij de Albert Heijn.
                                    </p>
                                    <p>
                                        Wij kwamen tot de conclusie dat onze onderzoeksresultaten overeenkwamen.
                                    </p>
                                    <p>
                                        De oplossing werd als volgt geformuleert:
                                        <p>
                                            Albert Heijn kan de klanten enthousiast maken over Dynamisch Afprijzen door alle afgeprijsde producten op een aparte webpagina te tonen. Deze webpagina zal dan deel zijn van ah.nl. Deze webpagina zal de naam Digitale Koopjeshoek krijgen.
                                        </p>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Uitdagingen en/of Problemen
                                </td>
                                <td>
                                    <p>
                                        Bij deze stap is als groep gekeken naar welke mogelijke uitdagingen konden opkomen. Hier ben ik in discussie gegaan met mijn mede-stagaires over de uitdagingen die zij hadden bedacht. Ik kon zelf geen uitdagingen bedenken.
                                    </p>
                                    <p>
                                        De grootste uitdagingen waren:
                                        <ul>
                                            <li>
                                                Hoe kan een niet-accurate voorraad getoond/verbeterd worden?
                                            </li>
                                            <li>
                                                Hoe moeten de afgeprijsde producten getoond worden?
                                            </li>
                                        </ul>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Oplossingen voor Uitdagingen/Problemen
                                </td>
                                <td>
                                    <p>
                                        Bij deze stap is als groep gekeken naar hoe de uitdagingen, uit de vorige stap, opgelost/vermeden kunnen worden. Het doel was om oplossingen te schrijven voor de uitdagingen en vervolgens te stemmen op de, naar eigen mening, beste oplossing. Elke mede-stagaire mocht 3 keer stemmen op een oplossing.
                                    </p>
                                    <p>
                                        In deze stap heb ik 2 oplossing kunnen bedenken. Deze oplossingen waren:
                                        <ul>
                                            <li>
                                            Een disclaimer die aangeeft dat de producten in de Digitale Koopjeshoek niet meer op voorraad kunnen zijn. Met als motivatie: hiermee kan er teleurstelling bij de klant voorkomen worden.
                                            </li>
                                            <li>
                                                De actuele prijs van het afgeprijsd product. Hierbij ziet de klant eerst de prijs (met korting) gevolgd door de oude prijs van het product. Mijn motivatie hiervoor was: de klant kan zien hoeveel geld hij/zij bespaart.
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        Ik stemde vervolgens op mijn eigen oplossingen. Ik stemde ook op:
                                        <ul>
                                            <li>
                                                Bij elk product kan de laatste update tijd vermeld worden.
                                            </li>
                                        </ul>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Impact en Moeite
                                </td>
                                <td>
                                    <p>
                                        Bij deze stap is als team bepaalt wat de impact en moeite zal zijn van elke oplossing.
                                    </p>
                                    <p>
                                        De impact en moeite is bepaald door mijn mede-stagaires.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentArrowStyle={{ borderRight: `7px solid  black`}}
                        iconStyle={{ background: `${white}`}}
                        icon={<FaFlagCheckered/>}
                    />
                </VerticalTimeline>
            </Container>
        </>
    )
}