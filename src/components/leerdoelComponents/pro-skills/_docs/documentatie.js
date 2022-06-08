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
                    icon={<HiOutlineClipboardList/>}
                >
                    <h3 className="vertical-timeline-element-title">Taken Doornemen</h3>
                    <h6 className="vertical-timeline-element-subtitle">Product Backlog</h6>
                    <p>
                       In Jira wordt er een scrumbord aangemaakt met de projectnaam, hier worden dan alle taken/features genoteerd. Elk teamlid heeft toegang tot de Jira-bord en kan zelf een taak oppakken.
                    </p>
                    <p>
                        Wegens NDA redenen is er geen gehele foto van de Jira-bord beschikbaar
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
                        Om een taak te selecteren en uit te voeren is het mogelijk om jezelf toe te wijzen aan de taak. Verder heeft elk taak ook een "Melder", dit is een persoon verantwoordelijk om te kijken hoe de voortgang gaat en ook of de taak juist is uitgevoerd.
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
                        Na het uitvoeren (code ontwikkelen, testen  en bugfixes) van een taak moet deze nagekeken worden door de "Melder". Om dit te doen krijgt de taak een "Gereed"-status (label).
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
                Hier zal er verteld worden over de feedback die is ontvangen en wat met de feedback is gedaan. Verder is er ook gedocumenteerd welke feedback is gegeven. De documentatie is op basis van
            </p>
            <p>
                De ontvangen feedback zal gaan over:
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
                            In de code wordt op basis van een berekening de afstand tussen klant en winkel berekened. In de berekening is er net als in Wiskunde gebruik gemaakt van cijfers, x's en y's. Dit maakt het lezen moeilijker voor de ontwikkelaar die de code b.v. moet onderhouden. De feedback is daarom als volgt verandert:
                            <ol>
                                <li>De constantes een omschrijvende naam geven. In dit geval is de naam gegeven: KmConstant. Dit is gedaan omdat het getal nodig is om de afstand te berekenen in kilometers</li>
                                <li>Variables een omschrijvende naam te geven. In dit geval staat de x en y voor relatief de lengte-en breedtegraad. De x's en y's in de berekening zijn toen hernoemd naar longitude (lengtegraad) en latitude (breedtegraad).</li>
                            </ol>
                            <p>
                                "I like the title of the Pull Request"
                            </p>
                            <p>
                               Elke Pull Request heeft een titel en omschrijving. Hierbij is het gebruikelijk om een titel te geven kort aangeeft welke veranderingen/toevoegingen de Pull Request zal maken. De reden voor de positieve feedback was omdat in de omschrijving was toegevoegd wat de veranderingen zijn van de documenten zijn.
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
                        De feedback wordt ontvangen wegens een miscommunicatie vanuit mijn kant. Hierbij had ik gemeld dat ik mijn schooldag, 1 dag per week waar de stagaire de ruimte heeft om deze te besteden aan school, zou over 2 dagen. Dit kwam echter over als: ik zal morgen een halve schooldag nemen.
                        <p>
                            Hierdoor werd ik de volgende dag verwacht tijdens de dagelijkse standup en werd mijn afwezigheid gezien als een afspraak die ik niet ben nagekomen.
                        </p>
                        <p>
                            De ontvangen feedback luidde als volg:
                            <p>
                                "Wees duidelijk met je communicatie. Goed dat je het mondelijk had gemeld, maar voor de volgende keer stuur ook een bericht. Het liefs 1 dag van tevoren melden hoe je je schooldag zal indelen."
                            </p>
                        </p>
                        <p>
                            <h5>Feedback Reflectie</h5>
                            <p>
                                Door mondeling te zeggen kan het niet begrepen of verstaan worden. Hierdoor is het altijd goed om een bericht te sturen. Door van tevoren wat de intenties zijn zal ervoor zorgen dat de mede-stagaires en begeleiders weten wat ze de volgende dag kunnen verwachten qua b.v. aanwezigheid, etc.
                            </p>
                        </p>
                        <p>
                            <h5>Wat is er met de Feedback gedaan</h5>
                            <p>
                                Met behulp van de feedback is het volgende verandert:
                                <p>
                                    Elke dag voor mijn schooldag melde dat morgen mijn schooldag is. Hierbij voegde ik aantoe dat ik daarom niet aanwezig zal zijn. Ook is aangegeven wat ik die dag zal doen op omtrent school.
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