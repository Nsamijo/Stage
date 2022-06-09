import {Container} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineCheckCircle, AiOutlineFlag} from "react-icons/ai";
import {BiConversation} from "react-icons/bi";
import {FaFlagCheckered} from "react-icons/fa";
import {IoGitPullRequestOutline} from "react-icons/io5";

import './pr.css';
import PR from './pr.png';
import Added from './added.png';
import Index from './index.png';
import Styling from './styling.png';
import Team from './team.png';

const PullRequest = () => {
    const white = 'rgb(255, 255, 255)';
    return (
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
                        Wegens een geheimhoudings verklaring met de Albert Heijn kan het zijn dat er weinig tot geen  beeld materiaal aanwezig is bij de documentatie aanwezig. Ook is er hierdoor expres informatie weggelaten.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<IoGitPullRequestOutline/>}
                >
                    <h3 className="vertical-timeline-element-title">Pull Request Geopened door Mede-Developer</h3>
                    <h6 className="vertical-timeline-element-subtitle">Github</h6>
                    <p>
                        <img className={"first"} src={PR} alt={"PR"}/>
                    </p>
                    <p>
                        Na het doornemen van de Pull Request omschrijving wordt duidelijk:
                        <ul>
                            <li>De mede-stagaire heeft een component voor een website afgerond en wilt deze verandering doorvoeren</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid  black`}}
                    iconStyle={{ background: `${white}`}}
                    icon={<BiConversation/>}
                >
                    <h3 className="vertical-timeline-element-title">Veranderingen Bekijken</h3>
                    <h6 className="vertical-timeline-element-subtitle">Github</h6>
                    <p>
                        Bij het nakijken wordt duidelijk dat er 3 aanpassingen zijn:
                        <ul>
                            <li>Er zijn 2 nieuwe documenten toegevoegd</li>
                            <li>De index pagina is aangepast om het eerder genoemde component te tonen</li>
                        </ul>
                        <h5>Nieuwe documenten</h5>
                        <img className={"second"} src={Added} alt={"Added files"}/>
                        <h5>Toevoeging aan Index pagina</h5>
                        <img className={"index"} src={Index} alt={"Index pagina"}/>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid  black`}}
                    iconStyle={{ background: `${white}`}}
                    icon={<BiConversation/>}
                >
                    <h3 className="vertical-timeline-element-title">Code Bekijken</h3>
                    <h6 className="vertical-timeline-element-subtitle">Github</h6>
                    <p>
                        De 2 nieuwe documenten bevat toevoegingen. Nu gaan we kijken wat de toevoegingen zijn.
                    </p>
                    <p>
                        <h5>Document Nr. 1</h5>
                        Dit document bevat de stijl instructies. De stijl instructies worden gebruikt in een ander document.
                        <img className={"styling"} src={Styling} alt={"Added files"}/>
                    </p>
                    <p>
                        <h5>Document Nr. 2</h5>
                        Dit document bevat de stijl instructies zoals hierboven genoemd. Verder worden er foto's en namen weergegeven van teamleden van een ander team.
                        <img className={"team"} src={Team} alt={"Added files"}/>
                    </p>
                    <p>
                        <h5>Conclusie</h5>
                        De code ziet er goed uit. Geen fouten, geen opmerkingen. Hierdoor mijn goedkeuring hieraan.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid  black`}}
                    iconStyle={{ background: `${white}`}}
                    icon={<AiOutlineCheckCircle/>}
                >
                    <h3 className="vertical-timeline-element-title">Pull Request Goedgekeurd</h3>
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

export default PullRequest;