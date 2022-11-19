import React from "react";
import {Container} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineFlag} from "react-icons/ai";
import {FaFlagCheckered} from "react-icons/fa";


export const Flows = () => {
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
                        Wegens een geheimhoudings verklaring met de Albert Heijn kan het zijn dat er weinig tot geen beeld materiaal aanwezig is bij de documentatie. Ook kan het zijn dat informatie is weggelaten.
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
                    contentArrowStyle={{ borderRight: `7px solid  black`}}
                    iconStyle={{ background: `${white}`}}
                    icon={<FaFlagCheckered/>}
                />
            </VerticalTimeline>
        </Container>
    )
}