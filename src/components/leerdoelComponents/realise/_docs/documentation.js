import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineFlag} from "react-icons/ai";
import {HiOutlineClipboardList} from "react-icons/hi";
import {FaFlagCheckered} from "react-icons/fa";
import {Container} from "react-bootstrap";
import {GoGithubAction} from "react-icons/go";

import './docs.css';
import criteria from './img/criteria.png';
import result from './img/resultaat.png';
import pr from './img/pr.png';

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
            <h3 className="vertical-timeline-element-title">Kwaliteitseisen Doornemen</h3>
            <h6 className="vertical-timeline-element-subtitle">Jira Criteria</h6>
            <p>
                <p>Dit is een screenshot van de Jira criteria. Hieruit wordt duidelijk dat er een back nodig is die de logos toont van merken die meedoen (wegens NDA redenen mag niet gezegt worden waaraan de merken meedoen).</p>
                <img className={"jira"} src={criteria} alt={"Jira defenitions"}/>
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
                  Op basis van de Jira Criteria zijn de volgende documenten aangemaakt/gewijzigd:
              </p>
              <p>
                  <img className={"jira"} src={result} alt={"Documenten gemaakt"}/>
              </p>
              <p>
                  Deze documenten doen het volgende:
                  <ul>
                      <li>participating-brands.module.scss [styling]: zorgt voor het stylen van de balk</li>
                      <li>participating-brands.tsx [component]: bevat de balk met de logos</li>
                      <li>brandLogo.tsx [blauwdruk]: een interface voor het ophalen van de logos uit de database (CMS)</li>
                      <li>endpoint.ts [blauwdruk]: link toegevoegd vanwaar de logos moeten worden opgehaald</li>
                      <li>logo-ad.png [logo]: een logo van de AH</li>
                  </ul>
              </p>
              <p>
                  Na een zelftest is er een Pull-Request aangemaakt om deze taak af te ronden.
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
                  <img src={pr} className={"jira"} alt={"Pull Request Participating Brands"}/>
              </p>
              <p>
                  3 ontwikkelaars (waarvan 1 begeleider) keuren de code wijzigingen en toevoegingen goed. Taak en leerdoel succesvol behaald!
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
                    icon={<GoGithubAction/>}
                >
                    <h3 className="vertical-timeline-element-title">Github Actions</h3>
                    <h6 className="vertical-timeline-element-subtitle">Continuous Integration and Continuous Deployment</h6>
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