import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
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
            <VerticalTimeline lineColor={"grey"}>
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
                        Presentatie door de product-eigenaar. Hierbij wordt de focus gelegt op de voedselverspilling binnen de Albert Heijn met als oplossing: Dynamisch Afprijzen.
                    </p>
                    <p>
                        Kern Dynamisch Afprijzen: De korting percentage van een product, die zal verlopen op die dag, verhogen naarmate de dag verloopt
                    </p>
                    <p>
                        Probleemstelling: Een webpagina maken die de Dynamisch Afgeprijsde producten toont per winkel
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
                    <h6 className="vertical-timeline-element-subtitle">Onderzoek van Minimale Eisen/Functionaliteit van het Product</h6>
                    <p>
                        Hierbij kwam grotendeels naar voren:
                        <ul>
                            <li>Tonen van de korting</li>
                            <li>Disclaimer/Waarschuwing voorraad verschillen</li>
                            <li>Het kunnen invoeren van een winkellocatie</li>
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
                            <li>Probleemstelling concreet neergezet</li>
                            <li>Minimale Eisen/Functionaliteit van het Product bepaald</li>
                            <li>Klanten ervaring in kaart gebracht voor in de winkel als online</li>
                        </ul>
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
                        Introductie gehad tot de Jira omgeving:
                        <ul>
                            <li>Taken neergezet</li>
                            <li>Aan elke taak een Accepteer Criteria (eis) gekoppeld</li>
                        </ul>
                        Ontwikkelingsomgeving opgezet:
                        <ul>
                            <li>Installeren van de IDE (Integrated Development Environment)</li>
                            <li>installeren van de gekozen programmeertaal: (Springboot) Java</li>
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
                        Introductie en uitleg over de API protocol die gevolgt moet worden om data te krijgen van Albert Heijn
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
                        AH Tech Labs maakt gebruik van een template als deze features maakt voor ah.nl. Deze moet dus ook gebruik worden voor het project.
                    </p>
                    <p>
                        Verder is vandaag de backend live gegaan en wordt beheerd door software: <a href={"https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/"}>Kubernetes</a>.
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
                            <li>Retrospective: Reflectie op de afgelopen sprint op basis van een Glad-Sad-Mad systeem (Hierbij reflecteren teamleden over situaties die vallen onder die categorieën)</li>
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
                        De afgelopen sprint wordt besproken met de Stagebegeleider. Hieruit kwam naar voren dat alle functionaliteiten af zijn en dat de focus nu zal zijn op het verfijnen van de functionaliteiten/website.
                        Met verfijnen wordt verstaant:
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
                        Voor een project live kan gaan op <a href={"https://www.ah.nl/"}>ah.nl</a> word het project getest op veiligheid. Hierbij moet de code en documentatie over het project (b.v. services die worden gebruikt, etc.) worden ingeleverd bij de Hackersguild.
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