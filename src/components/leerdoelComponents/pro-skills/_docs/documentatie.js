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
    return (
        <Container>

        </Container>
    );
}