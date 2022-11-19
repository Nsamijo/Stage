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
                    <p>
                        <h4>Persoonlijke Bijdrage</h4>
                        <p>
                            Tijdens de presentatie heb ik notities gemaakt. Deze notities heb ik uitgewerkt in Leerdoel 3: Analyse
                        </p>
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
                    <p>
                        <h4>Persoonlijke Bijdrage</h4>
                        <p>
                           Tijdens de Brainstorm-sessie heb ik geadviseerd over mogelijke functionaliteiten. Bij het onderdeel Impact en Moeite, Leerdoel 3: Analyseren, heb ik een geringe bijdrage kunnen leveren omdat ik niet kon inschatten hoeveel tijd en moeite het zou kosten om een functionaliteit te realiseren.
                        </p>
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
                    <p>
                        <h4>Persoonlijke Bijdrage</h4>
                        <p>
                            Ik werd hier ingedeeld in de Backend groep. Dit houdt in dat 2 mede-stagaires en ik verantwoordelijk waren voor het ontwikkelen van de functionaliteiten.
                        </p>
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
                    <h6 className="vertical-timeline-element-subtitle">Resultaten van de Brainstorm</h6>
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
                            De functionaliteiten uit de brainstorm zijn verder uitgewerkt en een voorlopig ontwerp was gemaakt. Hiermee was het voor het team en voor de producteigenaar duidelijk wat er ontwikkelt zou worden.
                        </p>
                        <p>
                            Door de klanten ervaring in kaart te brengen is er een beter beeld gekregen van hoe de webpagina eruit zou moeten zien. Welke stappen deze zal moeten zetten om op de webpagina te komen en/of het kopen van een product.
                        </p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ display: `none` }}
                    iconStyle={{ display: 'none'}}
                >
                    <p>
                        De volgende drie introductie momenten zullen gaan over:
                        <ul>
                            <li>Het opzetten van de ontwikkelingsomgeving</li>
                            <li>Kennismaking met de Albert Heijn ICT-omgeving</li>
                            <li>De AH Techlabs template</li>
                        </ul>
                    </p>
                    <p>
                       Tijdens deze introductie momenten heb ik kennis opgedaan over de/het:
                        <ul>
                            <li>
                                Beheren van taken met Jira
                            </li>
                            <li>
                                Gebruikte programmeertalen: Javascript/Typescript en (Springboot)Java
                            </li>
                            <li>
                                Gebruikte frontend library: React
                            </li>
                            <li>
                                Ontwikkelingsomgeving: Intellij IDE
                            </li>
                            <li>
                                Programmeerregels van AH Techlabs en Albert Heijn
                            </li>
                            <li>
                                Template voor het ontwikkelen van applicatie voor Albert Heijn
                            </li>
                            <li>
                                Protocol voor het ophalen/opslaan van data
                            </li>
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
                        <p>
                            Voor het bewaren van de projectvoortgang is er gebruik gemaakt van de tool: Jira. Op deze dag kreeg het team een introductie tot de Jira omgeving. Het opstellen van taken en eisen.
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
                            <li>Installeren en opzetten van de Intellij IDE (Integrated Development Environment)</li>
                            <li>installeren van de gekozen programmeertaal: (React en Spring) Java (Uitleg te vinden over deze talen in Leerdoel: Realiseren)</li>
                        </ul>
                    </p>
                    <p>
                        <h4>Persoonlijke Bijdrage</h4>
                        <p>
                            Ik heb hier meegekeken met het team. Het team heeft de taken neergezet in Jira en mij toen kort uitgelegd hoe ik zelf een taak kan oppakken.
                        </p>
                        <p>
                            Verder heb ik, onder begeleiding van de stagebegeleiders, de Intellij IDE en programmeertalen (Javascript/Typescript en Java) geïnstalleerd. Verder heb ik uitleg ontvangen over de inhoud en gebruik van (Spring) Java.
                        </p>
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
                    <h3 className="vertical-timeline-element-title">AH Techlabs Template</h3>
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
                    contentArrowStyle={{ display: `none` }}
                    iconStyle={{ display: 'none'}}
                >
                    <p>
                        Na de introductie ben ik aan de slag gegaan met de taken die stonden in de Jira-omgeving
                    </p>
                    <p>
                        Voor de eerste sprint had ik de volgende taken opgepakt/afgemaakt:
                        <ul>
                            <li>
                                Het bepalen van de afstand tussen klant en winkel. De afstand wordt berekent met de Haversine formule. Na het opleveren van deze functionaliteit stapte ik over naar de Frontend.
                            </li>
                            <li>
                                Na de overstap begon ik te werken aan het software onderdeel locatie-vermelding. Dit software onderdeel toont het adres van de, door de gebruiker, geselecteerde winkel. De gebruiker komt automatisch op de (afgeprijsde) producten-pagina. Indien er geen afgeprijsde producten zijn wordt een foutmelding gegenereerd. Wanneer de gebruiker de adres-onderdeel kiest komt deze weer terug op de landingspagina.
                            </li>
                        </ul>
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
                    <p>
                        Er werd hier een korte demo gegeven over de ontwikkelde componenten en functionaliteiten. Verder is er gekeken naar de voortgang in de Jira.
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
                    <p>
                        <h4>
                            Persoonlijke Bijdrage
                        </h4>
                        <p>
                            Ik heb meegedaan met de sprintupdate en reflectiemoment. Tijdens de sprintupdate heb ik het volgende gedaan:
                            <ul>
                                <li>
                                    Locatie-component opgeleverd. Deze werd vervolgens getest en goedgekeurd door de mede-stagaires en stagebegeleiders.
                                </li>
                                <li>
                                    Op de vraag welke taak ik hierna kon oppakken kreeg ik als antwoordt het maken van de Banner.
                                </li>
                            </ul>
                        </p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ display: `none` }}
                    iconStyle={{ display: 'none'}}
                >
                    <p>
                        Gedurende de tweede sprint werkte ik aan o.a.de volgende componenten:
                        <ul>
                            <li>
                                De Banner
                            </li>
                            <li>
                                Productweergave
                            </li>
                        </ul>
                    </p>
                    <p>
                        Verder deed ik ook het volgende:
                        <ul>
                            <li>
                                Bugfixes doen aan verschillende Frontend componenten waaronder de Locatie component
                            </li>
                            <li>
                                Doornemen en beoordelen van verschillende Pull Requests
                            </li>
                            <li>
                                Codeveranderingen (fixes) maken aan verschillende in Pull Request(s)
                            </li>
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
                    <p>
                        <h4>Persoonlijke Bijdrage</h4>
                        <p>
                            In de retrospective werd duidelijk dat er alleen nog bugfixes (fouten in de software die gecorrigeerd moeten worden) gedaan moeten worden. Ook moest de Hackerguild Safety Test uitgevoerd worden (zie vervolg).
                        </p>
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
                    <p>
                        <h4>Persoonlijke Bijdrage</h4>
                        <p>
                            Ik heb bijdrage geleverd aan de bugfixes. Ook heb ik meegewerkt aan de Disclaimer, de Banner en diverse programma-componenten.
                        </p>
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
                        Er vindt weer een Retrospective plaats.
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
                        De test-resultaten zijn positief en de feedback is verwerkt. Vandaag is het project officieel af!
                    </p>
                    <p>
                        Om de klanten te informeren over de Digitale Koopjeshoek zullen mijn mede-stagaires en ik moeten staan in de winkel. Het doel is dan om de Digitale Koopjeshoek te promoten door klanten aan te spreken en flyers uit te delen. Deze flyers zijn ontworpen door de UX-designer <a href={"https://www.linkedin.com/in/thijskraan/"}>Thijs Kraan</a>.
                    </p>
                    <p>
                        De promotie in de winkel zal plaatsvinden zodra het andere stage team zijn opdracht oplevert. Om de oplevering te vieren en het ander team te motiveren zijn er presentaties gegeven. Deze presentaties gaan over de nieuwe projecten.
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
                        Hierbij wordt ik gevraagd door mijn stagebegeleider om Mopinion toe te voegen aan de productenpagina van Digitale Koopjeshoek. Met Mopinion kunnen klanten hun ervaring delen met AH Techlabs.
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
                    <p>
                        Samen met een mede-stagaire heb ik 2 dagen promotie gedaan in verschillende Albert Heijn winkels. De promotie dagen en locatie zijn:
                        <ul>
                            <li>
                                9 November 2021: Hilversum. Samen met Feryllia Koulen.
                            </li>
                            <li>
                                10 November 2021: Amersfoort. Samen met Lucas Geisink.
                            </li>
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

export {Project};