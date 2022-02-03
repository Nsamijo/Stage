import {Container} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

import '../read-code/pr.css';
import {AiOutlineFlag} from "react-icons/ai";
import {FaFlagCheckered, FaMicroscope, FaPrescriptionBottleAlt} from "react-icons/fa";
import {RiFolderReceivedLine} from "react-icons/ri";
import {MdNoteAdd, MdReportProblem} from "react-icons/md";
import {GiImpactPoint} from "react-icons/gi";

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
                            Individueel is er onderzoek gedaan naar hoe bedrijven adverteren naar de klanten toe. Hierbij stonden uit:
                            <ul>
                                <li>Bol.com: heeft een speciale pagina voor aanbiedingen (outlet, tweedekans, etc.)</li>
                                <li>Mediamarkt.nl: heeft een gehele aparte website voor alle tweedehandse/geretouneerde producten</li>
                            </ul>
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
                            Albert Heijn kan de klanten enthousiast maken over Dynamisch Afprijzen door alle afgeprijsde producten op een aparte pagina te tonen. Deze pagina zal dan deel zijn van ah.nl. De pagina kreeg de naam: De Digitale Koopjeshoek.
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
                            Individueel wordt er gekeken welke uitdagingen/problemen kunnen voorkomen. Na het bedenken van uitdagingen/problemen stemt het team op de uitdagingen/problemen. Hierbij waren de grootste uitdagingen/problemen:
                            <ol>
                                <li><b>Context:</b> Dynamisch Afprijzen voorraad is niet altijd accuraat. Oorzaak hiervan is de hoeveelheid data die verwerkt moet worden van de vele winkels.
                                    <ul>
                                        <li><b>Uitdaging:</b> Hoe kan dit getoond/verbeterd worden?</li>
                                    </ul>
                                </li>
                                <li><b>Context:</b> Dynamisch Afprijzen is winkel specifiek. Dit houd in dat afgeprijsde producten alleen te vinden zijn in de winkel waar de producten zijn afgeprijsd.
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
                                        <li>Bij elke product kan er een timer worden neer gezet, met de laatste update tijd</li>
                                        <li>Een disclaimer die aangeeft dat de getoonde producten al niet meer op voorraad kunnen zijn</li>
                                    </ul>
                                </li>
                                <li>Hoe moeten de afgeprijsde producten getoond worden?
                                    <ul>
                                        <li>Aangezien de afgeprijsde producten gebonden zijn aan een winkel is het logisch om deze te tonen per winkel. Hierbij kan dan de klant per winkel inzien wat is afgeprijsd, de klant zou dan zijn locatie kunnen invoeren en alle supermarkten, in een bepaald radius, zien die het Dynamisch Afprijzen al implementeren.</li>
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
                            <b>Moeite (gesorteerd van moeilijk naar niet-moeilijk):</b>
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
                        contentArrowStyle={{ borderRight: `7px solid  black`}}
                        iconStyle={{ background: `${white}`}}
                        icon={<FaFlagCheckered/>}
                    />
                </VerticalTimeline>
            </Container>
        </>
    )
}