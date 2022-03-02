import {Container} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineFlag} from "react-icons/ai";
import {FaFlagCheckered, FaWrench} from "react-icons/fa";
import {HiOutlineClipboardList} from "react-icons/hi";
import {MdDoneOutline} from "react-icons/md";
import {CgSandClock} from "react-icons/cg";

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