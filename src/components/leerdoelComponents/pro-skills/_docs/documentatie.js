import {Container} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineFlag} from "react-icons/ai";
import {FaFlagCheckered, FaWrench} from "react-icons/fa";
import {HiOutlineClipboardList} from "react-icons/hi";
import {MdDoneOutline} from "react-icons/md";
import {CgSandClock} from "react-icons/cg";

import jira from './img/jira.png';
import name from './img/toewijzing.png';
import ready from './img/gereed.png';
import done from '../../realise/_docs/img/criteria.png'

import './docs.css';

export const Aansturing = () => {
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
                        Wegens een geheimhoudings verklaring met de Albert Heijn kan het zijn dat er weinig tot geen beeld materiaal aanwezig is bij de documentatie. Ook kan het zijn dat informatie  is weggelaten.
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
                    icon={<HiOutlineClipboardList/>}
                >
                    <h3 className="vertical-timeline-element-title">Taken Doornemen</h3>
                    <h6 className="vertical-timeline-element-subtitle">Product Backlog</h6>
                    <p>
                       In Jira wordt er een scrumbord aangemaakt met de projectnaam, hier worden dan alle taken/features genoteerd. Elk teamlid heeft toegang tot de Jira-bord en kan zelf een taak oppakken.
                    </p>
                    <p>
                        Wegens een geheimhoudings verklaring is er geen gehele foto van de Jira-bord beschikbaar
                        <img src={jira} className={"standard"} alt={"Jira bord"}/>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<FaWrench/>}
                >
                    <h3 className="vertical-timeline-element-title">Taak Selecteren en Oppakken</h3>
                    <h6 className="vertical-timeline-element-subtitle">Aan de slag</h6>
                    <p>
                        Het was mogelijk om zelfstandig een taak op te pakken. Verder heeft elk taak ook een "Melder", dit is een persoon die de voortgang en de correcte uitvoering van de taak moet bewaken.
                    </p>
                    <p>
                        <img src={name} className={"standard"} alt={"Jira Overzicht"}/>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<CgSandClock/>}
                >
                    <h3 className="vertical-timeline-element-title">Taak Afgerond</h3>
                    <h6 className="vertical-timeline-element-subtitle">Wachten op goedkeuring</h6>
                    <p>
                        Om dit te doen moet de uitvoerder de taak "Gereed" melden.
                    </p>
                    <p>
                        <img src={ready} className={'standard'} alt={'Ready voorbeeld Jira'}/>
                    </p>
                    <p>
                        De "Melder" krijgt hierbij een notificatie en bekijkt de resultaten van de taak. In vele gevallen is dit een Pull Request op Github.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<MdDoneOutline/>}
                >
                    <h3 className="vertical-timeline-element-title">Taak Succesvol Afgerond</h3>
                    <h6 className="vertical-timeline-element-subtitle">Succes op de werkvloer!</h6>
                    <p>
                        De taakuivoering is goedgekeurd en krijgt een "Geverifieerd"-status (label).
                    </p>
                    <p>
                        <img src={done} className={'done'} alt={'Verified status Jira'}/>
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
    );
}

export const FeedbackTimeline = () => {
    const white = 'rgb(255, 255, 255)';
    return (
        <Container>
            <p>
                Onderstaand wordt ingegaan op de ontvangen feedback.
            </p>
            <p>
                De ontvangen feedback heb ik onderverdeeld in:
                <ul>
                    <li>De opgeleverde code: feedback over de kwaliteit van de code</li>
                    <li>Het gedrag tijdens de stage: feedback over handelingen/gewoontes die fijne en minder fijne gevoelens opleveren</li>
                </ul>
            </p>
            <p>
                De documentatie zal eerst gaan over de feedback die is ontvangen tijdens de stage bij Albert Heijn.
            </p>
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
                        Wegens een geheimhoudings verklaring met de Albert Heijn kan het zijn dat er weinig tot geen  beeld materiaal aanwezig is bij de documentatie aanwezig. Ook is er hierdoor expres informatie weggelaten.
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
                >
                    <h3 className="vertical-timeline-element-title">Feedback Opgeleverde Code</h3>
                    <h6 className="vertical-timeline-element-subtitle">Ontvangen van begeleider: Thijs van Tol</h6>
                    <p>
                        De feedback is ontvangen bij de eerste Pull Request van de stage. Bij deze Pull Request werd de functionaliteit toegevoegd om de afstand tussen de klant en winkel te berekenen.
                        <p>
                            De ontvangen feedback luidt als volg:
                            <ul>
                                <li>
                                    "Please do not use magic numbers. Use better named variables."
                                </li>
                                <li>
                                    "I like the title of the Pull Request"
                                </li>
                            </ul>
                        </p>
                    </p>
                    <p>
                        <h5>Feedback Reflectie</h5>
                        <p>
                            <p>"Please do not use magic numbers. Use better named variables"</p>
                            In de code wordt op basis van een berekening de afstand tussen klant en winkel berekened. In de berekening is er een wiskundige notatie gebruikt met name de letters x en y. Dit maakt het lezen moeilijker voor de ontwikkelaar die de code b.v. moet onderhouden. De feedback is daarom als volgt verandert:
                            <ol>
                                <li>Er is gebruik gemaakt van een constante waarde voor het berekenen van de afstand tussen klant en winkel. Deze waarde heb ik: KmConstant genoemd.</li>
                                <li>Variables een omschrijvende naam te geven. In dit geval staan de x en y voor respectievelijk de lengte-en breedtegraad. De x's en y's in de berekening zijn toen hernoemd naar longitude (lengtegraad) en latitude (breedtegraad).</li>
                            </ol>
                            <p>
                                "I like the title of the Pull Request"
                            </p>
                            <p>
                               Elke Pull Request heeft een titel en omschrijving. Hierbij is het gebruikelijk om een titel te gebruiken die in beknopte termen aangeeft welke veranderingen/toevoegingen de Pull Request zal maken. De reden voor de positieve feedback was omdat er in de omschrijving was aangegeven welke veranderingen in de documenten zouden worden doorgevoerd.
                            </p>
                        </p>
                        <p>
                            <h5>Wat met de feedback is gedaan</h5>
                            <p>
                                Uit de feedback zijn de volgende veranderingen bij het ontwikkelen toegepast:
                                <ul>
                                    <li>
                                        Bij het gebruiken van een variabel moet deze een intuitive en omschrijvende naam hebben. Hierbij wordt de leesbaarheid van de code beter.
                                    </li>
                                    <li>
                                        Hou de titel van een Pull Request kort en bondig. Maar zet in de omschrijving zoveel mogelijk informatie te over de Pull Request.
                                    </li>
                                </ul>
                            </p>
                        </p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                >
                    <h3 className="vertical-timeline-element-title">Feedback Gedrag Tijdens de Stage</h3>
                    <h6 className="vertical-timeline-element-subtitle">Ontvangen van stagebegeleider: Sophie Schoordijk</h6>
                    <p>
                        Ik heb feedback op de wijze waarop ik heb gecommuniceerd.
                        Hierbij heb ik aan 1 van mijn stagebegeleiders het volgende meegedeeld: "Morgen neem ik een halve dag en de dag daarna de andere helft.".
                        <br/>
                        Wat ik probeerde te zeggen is dat ik mijn schooldag zou splitsen in 2 dagdelen waarbij 1 dagdeel zou gebruiken voor stage en 1 dagdeel voor school.
                        <br/>
                        Mijn mededeling kwam als volgt over: "Ik zal morgen een halve schooldag nemen". Gevolg hiervan is dat ik de volgende dag verwacht werd tijdens de dagelijkse standup en mijn afwezigheid gezien werd als een afspraak die ik niet was nagekomen.
                        <p>
                            De feedback luidde als volg:
                            <p>
                                "Wees duidelijk met je communicatie. Goed dat je het mondelijk had gemeld, maar voor de volgende keer stuur ook een bericht. Het liefs 1 dag van tevoren melden hoe je je schooldag zal indelen."
                            </p>
                        </p>
                        <p>
                            <h5>Feedback Reflectie</h5>
                            <p>
                                Ik heb onduidelijk gecommuniceerd. En ik heb niet gecontroleerd of mijn mededeling goed was overgekomen. Ook ben ik erop gewezen dat ik sommige onderwerpen via een bericht aan mijn teamleden moet mededelen. Door te werken aan mijn communicatie zowel mondeling als schriftelijk kunnen misverstanden voorkomen worden.
                            </p>
                        </p>
                        <p>
                            <h5>Wat is er met de Feedback gedaan</h5>
                            <p>
                                Met behulp van de feedback is het volgende verandert:
                                <p>
                                    Ik gaf duidelijk aan wanneer ik naar school moest. Ik vertelde hierbij welke vakken ik zou volgen op school.
                                </p>
                            </p>
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
    );
}