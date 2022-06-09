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
import actions from './img/github-actions.png';

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
            <p>
                Bij AH Tech Labs is Continuous Intergration en Continuous Deployment geautomatiseerd met behulp van Github Actions. In Github Actions worden dit een workflow genoemd.
            </p>
            <p>
                Om de leerdoel te behalen zijn de workflows van AH Tech Labs gebruikt. Voor de workflows zijn gebruikt is eerst gekeken naar wat elke workflow doet en hoe deze te gebruiken.
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
                    icon={<GoGithubAction/>}
                >
                    <h3 className="vertical-timeline-element-title">Github Actions</h3>
                    <h6 className="vertical-timeline-element-subtitle">Continuous Integration and Continuous Deployment in Workflows</h6>
                    <p>
                        Een workflow wordt gebruikt om 1 actie automatisch uit te voeren. In AH Tech Labs worden de volgende workflows gebruikt:
                        <p>
                            <img src={actions} className={'jira'} alt={"Foto van AH Tech Labs workflows"}/>
                        </p>
                    </p>
                    <p>
                        Uit de bovenstaande foto kan gezien worden dat er 4 workflows zijn n.l.:
                        <ul>
                            <li>Create release</li>
                            <li>Pull Request deployment</li>
                            <li>Pull Request generic actions</li>
                            <li>Release to production</li>
                        </ul>
                        Het kan zijn dat andere bedrijven dezelfde soorten workflows hebben maar andere titels voor deze hebben.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<HiOutlineClipboardList/>}
                >
                    <h3 className="vertical-timeline-element-title">Github Actions: Workflows</h3>
                    <h6 className="vertical-timeline-element-subtitle">Hun functionaliteiten binnen AH Tech Labs</h6>
                    <p>
                        <h5>Create release</h5>
                        Bij deze workflow wordt de code omgezet tot applicatie. Hierbij wordt de code geoptimaliseerd door een programma (compiler) en gereed gemaakt om online te gaan. Bij het maken van een release moet een versie nummer toegevoegd worden. Deze workflow valt onder Continuous Deployment.
                    </p>
                    <p>
                        <h5>Pull Request deployment</h5>
                        Bij deze wordt de Pull Request doorgenomen. Hierbij gebeurt onder ander het volgende:
                        <ul>
                            <li>Een Label toegevoegd: deze label is afhankelijk van de omschrijving. Een label kan bijvoorbeeld zijn "Fix"</li>
                            <li>Code controle: Een controle om te zien of de code voldoet aan de programmeerregels van de taal. Indien er fouten zijn wordt er automatisch feedback gezet</li>
                        </ul>
                        Deze workflow valt dus onder Continuous Intergration.
                    </p>
                    <p>
                        <h5>Pull Request generic actions</h5>
                        Deze workflow maakt een melding aan bij Microsoft Teams over de Pull Request. In de melding staat een link naar de toebehorende Pull Request zodat deze makkelijk terug te vinden is voor het team. Deze workflow is, naar eigen mening, geen Continous Intergration noch Continuous Deployment gerelateerd. De mening is dat deze meer een communicatieve rol heeft.
                    </p>
                    <p>
                        <h5>Release to production</h5>
                        Deze workflow zorgt ervoor dat een release (applicatie), gespecificeerd door middel van een versie nummer, online gezet wordt. Indien het een applicatie is dat is verbeterd wordt deze automatisch geupdate en online gezet zonder dat de klant dat merkt. Deze workflow valt onder Continuous Deployment.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<GoGithubAction/>}
                >
                    <h3 className="vertical-timeline-element-title">Github Actions in Actie</h3>
                    <h6 className="vertical-timeline-element-subtitle">Workflows gebruiken</h6>
                    <p>
                        Van alle workflows worden er 2 handmatisch uitgevoerd, deze zijn namelijk:
                        <ul>
                            <li>"Release to production": Dit is gedaan om ervoor te zorgen dat de klant geen releases ontvangen met bugs.</li>
                            <li>
                                "Create Release": Dit is gedaan om ervoor te zorgen dat er geen tot weinig bugs (fouten) terecht komen bij de klant(en)
                            </li>
                        </ul>
                    </p>
                    <p>
                        <h5>Gebruik van CI/CD</h5>
                        <ul>
                            <li>
                                Een Pull Request wordt geopened
                            </li>
                            <li>
                                Met het openen van een  Pull Request wordt automatisch gebruik gemaakt van 2 workflows (Pull Request deployment, Pull Request generic actions) voor Continuous Intergration.
                            </li>
                            <li>
                                Na de goedkeuring van de Pull Request wordt de code wijzigingen toegevoegd.
                            </li>
                            <li>
                                De volgende stap is om een release aan te maken. Hierbij wordt een versie nummer toegevoegd (b.v. v1.1.0), deze nummer is afhankelijk van de aantal iteraties die er zijn van het project. De workflow "Create a release" wordt gebruikt. De laatste Continuous Intergration stap
                            </li>
                            <li>
                                Na het succesvol maken van een release kan deze online gezet worden. Hierbij wordt de laatste workflow "Release to production" gebruikt. De laaste en enige Continuous Deployment workflow.
                            </li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    icon={<HiOutlineClipboardList/>}
                >
                    <h3 className="vertical-timeline-element-title">Continous Intergration en Continuous Deployment Reflectie</h3>
                    <h6 className="vertical-timeline-element-subtitle">Geleerd en indruk</h6>
                    <p>
                        De workflows die automatisch worden uitgevoerd wordt nauwelijks opgemerkt. Natuurlijk zijn de labels en feedback te zien. Alleen gebeurt dit op een zodanige wijze dat niet eens gemerkt wordt dat het onder Continuous Intergration valt. Het maken en online zetten van een release is nu zo simpel dat zelfs een klant van de ALbert Heijn met minimale uitleg zou kunnen doen.
                    </p>
                    <p>
                        De kennis die is opgedaan gaat meer over het opstellen van een workflow. Nu is de kennis aanwezig om een eigen workflow te maken en zelf te bepalen wat deze moet doen. Bij zo een workflow moeten alle stappen voor b.v. online zetten specifiek neergezet worden.
                    </p>
                    <p>
                        Met deze kennis ben ik aan de slag gegaan aan mijn eigen workflow voor dit verslag en is het mij gelukt. Om een indruk te geven hoe ingewikkeld een workflow is zeg ik u dit: "Het duurde mij 3 weken voor mijn workflow voor deployment van mijn website werkte"
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