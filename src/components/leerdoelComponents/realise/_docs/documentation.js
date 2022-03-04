import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineFlag} from "react-icons/ai";
import {HiOutlineClipboardList} from "react-icons/hi";
import {FaFlagCheckered} from "react-icons/fa";
import {Container} from "react-bootstrap";

export const QualityDoc = () => {
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
            <h3 className="vertical-timeline-element-title">Kwaliteitseisen Doornemen</h3>
            <h6 className="vertical-timeline-element-subtitle">Ontwerp en Jira Criteria</h6>
            <p>

            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${white}`, border: 'solid'}}
              contentArrowStyle={{ borderRight: `7px solid black` }}
              iconStyle={{ background: `${white}`}}
              icon={<HiOutlineClipboardList/>}
          >
              <h3 className="vertical-timeline-element-title">Code Resultaat</h3>
              <h6 className="vertical-timeline-element-subtitle">Ontwikkelings resultaat</h6>
              <p>

              </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${white}`, border: 'solid'}}
              contentArrowStyle={{ borderRight: `7px solid black` }}
              iconStyle={{ background: `${white}`}}
              icon={<HiOutlineClipboardList/>}
          >
              <h3 className="vertical-timeline-element-title">Code Test en Kwaliteit-Check</h3>
              <h6 className="vertical-timeline-element-subtitle">Voldoet aan ontwerp en Jira criteria?</h6>
              <p>

              </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${white}`, border: 'solid'}}
              contentArrowStyle={{ borderRight: `7px solid black` }}
              iconStyle={{ background: `${white}`}}
              icon={<HiOutlineClipboardList/>}
          >
              <h3 className="vertical-timeline-element-title">Pull Request Aanmaken</h3>
              <h6 className="vertical-timeline-element-subtitle">Aanvraag op goedkeuring van derden</h6>
              <p>

              </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${white}`, border: 'solid'}}
              contentArrowStyle={{ borderRight: `7px solid black` }}
              iconStyle={{ background: `${white}`}}
              icon={<HiOutlineClipboardList/>}
          >
              <h3 className="vertical-timeline-element-title">Code Voldoet</h3>
              <h6 className="vertical-timeline-element-subtitle">Alle kwaliteitseisen zijn behaald</h6>
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

export const CICDDocs = () => {
    return (
        <Container>

        </Container>
    );
}