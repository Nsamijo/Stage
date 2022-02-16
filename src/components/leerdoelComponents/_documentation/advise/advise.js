import {Container} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineFlag} from "react-icons/ai";
import {FaFlagCheckered} from "react-icons/fa";
import {IoGitPullRequestOutline} from "react-icons/io5";


export const Leerdoel4 = () => {
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
                contentArrowStyle={{ borderRight: `7px solid black` }}
                iconStyle={{ background: `${white}`}}
                icon={<IoGitPullRequestOutline/>}
            >
                <h3 className="vertical-timeline-element-title">Bepalen van Functionaliteiten</h3>
                <h6 className="vertical-timeline-element-subtitle">Github</h6>
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
    )
}