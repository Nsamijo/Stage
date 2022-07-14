import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import {Container} from "react-bootstrap";
import {AiOutlineFlag} from "react-icons/ai";
import {FaFlagCheckered} from "react-icons/fa";
import {GoCommentDiscussion, GoSettings} from "react-icons/go";
import {GrWorkshop} from "react-icons/gr";
import {BsListCheck, BsListTask} from "react-icons/bs";
import {BiCommentDetail, BiConversation} from "react-icons/bi";
import {CgTemplate} from "react-icons/cg";
import {Gi3DStairs} from "react-icons/gi";
import {MdOutlineAssessment, MdOutlineRateReview} from "react-icons/md";
import {SiHackaday} from "react-icons/si";
import {VscCode, VscDebugStart} from "react-icons/vsc";

import './project.css';

const Project = () => {

    const white = 'rgb(255, 255, 255)';
    return (
        <Container className="project">
            <h2>Projectduur:</h2>
            <p>Een project duurt ongeveer 8 weken (4 sprints)</p>
            <h4>Sprint-duur:</h4>
            <p>2 weken</p>
            <VerticalTimeline lineColor={"grey"} layout={"1-element-left"}>
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
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="1 September 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<AiOutlineFlag/>}
                >
                    <h3 className="vertical-timeline-element-title">Project Kickoff</h3>
                    <h6 className="vertical-timeline-element-subtitle">AH Hoofdkantoor, Zaandam</h6>
                    <p>
                        Op deze dag kregen de stagaires van AH Tech Labs een presentatie verzorgt door de producteigenaar. Hierbij wordt de focus gelegt op het voorkomen van voedselverspilling binnen de Albert Heijn met als oplossing: Dynamisch Afprijzen.
                    </p>
                    <p>
                        Dynamisch Afprijzen: De korting percentage van een product, die zal verlopen op die dag, verhogen naarmate de dag verloopt.
                    </p>
                    <p>
                        Probleemstelling: Hoe kan Albert Heijn zijn klanten, zo enthousiast mogelijk, over Dynamisch Afprijzen laten weten?
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<GoCommentDiscussion/>}
                >
                    <h3 className="vertical-timeline-element-title">Brainstorm</h3>
                    <h6 className="vertical-timeline-element-subtitle">Minimale Eisen/Functionaliteit van het Product</h6>
                    <p>
                        Om de oplossing te bepalen is er een Brainstorm (oftewel probleemanalyse) plaatsgevonden. In deze analyse was het centraal om eerst te kijken naar al bestaande oplossingen en ook het bepalen van belangrijke functionaliteiten. Deze functionaliteiten moesten de klanten motiveren om de afgeprijsde producten te kopen.
                    </p>
                    <p>
                        De belangrijke functionaliteiten die het team aan het eind bepaalde waren:
                        <ul>
                            <li>Tonen van de korting</li>
                            <li>Disclaimer/Waarschuwing voorraad verschillen</li>
                            <li>Het kunnen invoeren van een winkellocatie door de klant</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="2 September 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<GrWorkshop/>}
                >
                    <h3 className="vertical-timeline-element-title">Officiële Start Project</h3>
                    <h6 className="vertical-timeline-element-subtitle">Digitale Koopjeshoek</h6>
                    <p>
                        Het team heeft gekozen om het project te noemen: Digitale Koopjeshoek. Het team bestaat uit:
                        <ul>
                            <li>3 Backend Developers: verantwoordelijk voor de logica (b.v. het ophalen van de dynamisch afgeprijsde producten uit de database) van de Digitale Koopjeshoek</li>
                            <li>3 Frontend Developers: verantwoordelijk voor het maken van de gebruikersinterface</li>
                            <li>1 UX designer: verantwoordelijk voor het designen van de gebruikersinterface</li>
                            <li>1 Business Analyst: verantwoordelijk voor alle business georienteerde zaken (b.v. contact houden met stakeholders)</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="3 September 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<BsListTask/>}
                >
                    <h3 className="vertical-timeline-element-title">Probleem, Eisen en Functionaliteiten</h3>
                    <h6 className="vertical-timeline-element-subtitle">Build</h6>
                    <p>
                        <ul>
                            <li>Oplossing bepaald</li>
                            <li>Minimale Eisen/Functionaliteit van het Product bepaald</li>
                            <li>Klanten ervaring in kaart gebracht voor in de winkel als online</li>
                        </ul>
                        <p>
                            De oplossing die is gekozen is een webpagina. De reden voor deze keuze was:
                            <ul>
                                <li>
                                    Het kunnen toevoegen aan ah.nl als webpagina. Door dit te doen kan de klant zien dat de webpagina niet de klant probeert op te lichten.
                                </li>
                            </ul>
                        </p>
                        <p>
                            De functionaliteiten uit de brainstorm zijn verder uitgewerkt en een voorlopig ontwerp was gemaakt. Hiermee wwas het voor het team en voor de producteigenaar duidelijk wat er ontwikkelt zou worden.
                        </p>
                        <p>
                            Door de klanten ervaring in kaart te brengen is er een beter beeld gekregen van hoe de webpagina eruit zou moeten zien. Welke stappen deze zal moeten zetten om op de webpagina te komen en/of het kopen van een product.
                        </p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="6 September 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<GoSettings/>}
                >
                    <h3 className="vertical-timeline-element-title">Opzetten van Ontwikkelingsomgeving</h3>
                    <h6 className="vertical-timeline-element-subtitle">Build</h6>
                    <p>
                        <p>
                            Voor het bewaren van de projectvoortgang is er gebruik gemaakt van de tool: Jira. Op deze dag kreeg het team een introductie tot de Jira opgeving. Het opstellen van taken en eisen.
                        </p>
                        Met deze informatie heeft het team toen:
                        <ul>
                            <li>Taken neergezet</li>
                            <li>Aan elke taak een Acceptatie Eis gekoppeld</li>
                        </ul>
                        <p>
                            Voor er gewerkt kon worden aan de taken kregen de IT-stagaires eerst een introductie tot de ontwikkelings omgeving van AH Tech Labs.
                        </p>
                        Om te beginnen met ontwikkelen werd het volgende gedaan:
                        <ul>
                            <li>Installeren en opzetten van de IDE (Integrated Development Environment)</li>
                            <li>installeren van de gekozen programmeertaal: (React en Spring) Java (Uitleg te vinden over deze talen in Leerdoel: Realiseren)</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="8 September 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<BiCommentDetail/>}
                >
                    <h3 className="vertical-timeline-element-title">Albert Heijn Omgeving</h3>
                    <h6 className="vertical-timeline-element-subtitle">Build</h6>
                    <p>
                        Introductie en uitleg over de API protocol die gevolgt moet worden om data te krijgen van Albert Heijn. Met andere woorden voor er data van Albert Heijn Databases verkregen kon worden moest er eerst een authenticatie plaatsvinden.
                        <p>
                            Verder maakte het team ook kennis met de AH Template. Dit template is een standaard webpagina die kan worden toegevoegd aan ah.nl. Dit template wordt voornamelijk gebruikt bij AH Tech Labs als er gekozen wordt om een webpagina te ontwikkelen.
                        </p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="9 September 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<CgTemplate/>}
                >
                    <h3 className="vertical-timeline-element-title">AH Tech Labs Template</h3>
                    <h6 className="vertical-timeline-element-subtitle">Build</h6>
                    <p>
                        Binnen Tech Labs wordt er gebruik gemaakt van een template ten behoeve van ontwikkelingen van features voor ah.nl. Dit template moesten we gedurende dit project gebruiken.
                    </p>
                    <p>
                        Verder is vandaag de backend live gegaan en wordt beheerd door de software: <a href={"https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/"}>Kubernetes</a>.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="13 September 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<Gi3DStairs/>}
                >
                    <h3 className="vertical-timeline-element-title">Voortgang Gesprek</h3>
                    <h6 className="vertical-timeline-element-subtitle">Build</h6>
                    <p>
                        De voortgang van het project wordt besproken met de Stagebegeleider/Producteigenaar.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="15 September 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<MdOutlineAssessment/>}
                >
                    <h3 className="vertical-timeline-element-title">Interne Demo & Eerste Sprint</h3>
                    <h6 className="vertical-timeline-element-subtitle">Build</h6>
                    <p>
                        Om de ene week, op de Woensdagen, vindt er een (interne) demonstratie plaats. Hierbij presenteert elk team zijn voortgang en wat er nog aan komt.
                    </p>
                    <p>
                        Vandaag is het einde van de eerste sprint. De sprint wordt geindigt met:
                        <ul>
                            <li>Sprintupdate: Jira bord aanpassen</li>
                            <li>Retrospective: Reflectie op de afgelopen sprint op basis van een Glad-Sad-Mad systeem (Hierbij reflecteren teamleden over situaties die vallen onder boverstaande categorieën)</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="28 September 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<MdOutlineAssessment/>}
                >
                    <h3 className="vertical-timeline-element-title">Einde Tweede Sprint</h3>
                    <h6 className="vertical-timeline-element-subtitle">Build</h6>
                    <p>
                        De retrospective dit keer is gedaan op basis van:
                        <ul>
                            <li>Wat ging er goed?</li>
                            <li>Wat ging minder goed?</li>
                            <li>Wat kan beter?</li>
                        </ul>
                    </p>
                    <p>
                        De afgelopen sprint wordt besproken met de Stagebegeleider. Hieruit kwam naar voren dat alle functionaliteiten af zijn en dat de focus zal liggen op het verfijnen van de functionaliteiten/website.
                        Met verfijnen wordt verstaan:
                        <ul>
                            <li>Testen en feedback verzamelen</li>
                            <li>Verzamelde feedback implementeren</li>
                            <li>Producteigenaar spreken over de voortgang en/of vragen om feedback</li>
                        </ul>
                        Het project gaat nu van een "Build"-fase naar een "Measure"- en "Learn"-fase. De "Measure"- en "Learn"-fase hebben een kortere duur.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<SiHackaday/>}
                >
                    <h3 className="vertical-timeline-element-title">Hackerguild AH</h3>
                    <h6 className="vertical-timeline-element-subtitle">Safety Test</h6>
                    <p>
                        Voor een project live kan gaan op <a href={"https://www.ah.nl/"}>ah.nl</a> word het project getest op veiligheid. Hierbij moet de code en documentatie over het project (b.v. diensten die worden gebruikt, etc.) worden ingeleverd bij de Hackersguild.
                    </p>
                    <p>
                        De Hackersguild voert een aantal veiligheids-testen uit. Indien het project 1 van de testen faalt zal deze worden afgekeurd. De feedback zal worden geleverd aan het team en gevraagd worden om aanpassingen te maken.
                    </p>
                    <p>
                        Een project mag alleen live gaan als deze expliciete toestemming heeft van de Hackersguild
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="4 Oktober 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<VscDebugStart/>}
                >
                    <h3 className="vertical-timeline-element-title">Digitale Koopjeshoek Live</h3>
                    <h6 className="vertical-timeline-element-subtitle">Deployment</h6>
                    <p>
                        Digitale Koopjeshoek wordt toegevoegd aan de website van Albert Heijn (<a href={"https://www.ah.nl/"}>ah.nl</a>). Hierop wordt er getest en feedback verzameld.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="8 Oktober 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<VscCode/>}
                >
                    <h3 className="vertical-timeline-element-title">Laatste Feedback Implementeren</h3>
                    <h6 className="vertical-timeline-element-subtitle">Measure - Learn</h6>
                    <p>
                        De laatste feedback komt binnen vanuit business. Deze is al uitgewerkt en moet worden meegenomen in de applicatie. Deze feedback gaat voornamelijk over de stijl, lettertype en -grote.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="12 Oktober 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<MdOutlineAssessment/>}
                >
                    <h3 className="vertical-timeline-element-title">Einde Derde Sprint</h3>
                    <h6 className="vertical-timeline-element-subtitle">Afronden</h6>
                    <p>
                        De derde sprint is geëindigt.
                    </p>
                    <p>
                        Digitale Koopjeshoek is vrijwel af. Hierbij wordt gemeld dat er binnenkort nieuwe projecten zullen plaatsvinden.
                    </p>
                    <p>
                        De Retrospective vindt weer plaats.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="14 Oktober 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<BsListCheck/>}
                >
                    <h3 className="vertical-timeline-element-title">Digitale Koopjeshoek Afronden</h3>
                    <h6 className="vertical-timeline-element-subtitle">Nieuw Project</h6>
                    <p>
                        De test-resultaten zijn positief en de feedback is verwerkt. Vandaag is officieel het project af!
                    </p>
                    <p>
                        De demo in de winkel wordt uitgesteld wegens een vertraging bij het ander team.
                    </p>
                    <p>
                        Deze prestatie wordt gevierd met presentaties over het nieuw projecten.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    date="21 Oktober 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<MdOutlineRateReview/>}
                >
                    <h3 className="vertical-timeline-element-title">Mopinion</h3>
                    <p>
                        Mopinion wordt toegevoegd aan Digitale Koopjeshoek. Hierbij kan een klant een beoordeling plaatsen over de Digitale Koopjeshoek.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid  black`}}
                    date="9 November 2021"
                    iconStyle={{ background: `${white}`}}
                    icon={<BiConversation/>}
                >
                    <h3 className="vertical-timeline-element-title">Promotie Digitale Koopjeshoek</h3>
                    <h6 className="vertical-timeline-element-subtitle">AH Locatie</h6>
                    <p>
                        De lancering is officieel! De stagaires die gewerkt hebben aan het project moeten op verschillende locaties, in supermarkten van Albert Heijn, het project promoten. Dit houdt in:
                        <ul>
                            <li>Uitdelen van flyers</li>
                            <li>Voorlichting geven over de nieuwe feature van ah.nl: De Digitale Koopjeshoek</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentArrowStyle={{ borderRight: `7px solid  black`}}
                    iconStyle={{ background: `${white}`}}
                    icon={<FaFlagCheckered/>}
                >
                </VerticalTimelineElement>
            </VerticalTimeline>
        </Container>
    )
}

export default Project;