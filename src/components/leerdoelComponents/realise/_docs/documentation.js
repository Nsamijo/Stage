import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineFlag} from "react-icons/ai";
import {HiOutlineClipboardList} from "react-icons/hi";
import {FaFlagCheckered, FaTools} from "react-icons/fa";
import {Container} from "react-bootstrap";
import {GoGithubAction} from "react-icons/go";

import './docs.css';
import design from './img/balk.png';
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
                <p>Dit is een screenshot van de Jira criteria. Hieruit wordt duidelijk dat er een back nodig is die de logos toont van merken die meedoen (wegens de geheimhoudings verklaring mag niet gezegt worden waaraan de merken meedoen).</p>
                <img className={"jira"} src={criteria} alt={"Jira defenitions"}/>
            </p>
              <p>
                  <h5>Kwaliteitseisen</h5>
                  <ol>
                      <li>
                          Een logo balk met participating brands (eventueel wit op kleur of witte balk toevoegen) met doorlink naar sharepoint van de brands (bedrijf)
                      </li>
                      <li>
                          UX heeft nu gekozen voor "Our Clients" graag "Participating Brands" noemen
                      </li>
                      <li>
                          Ook de logo Ahold European Solution toevoegen, daarna de logo van de brands
                      </li>
                      <li>
                          Tekst onder participating brands toevoegen: + please click on the logo to get to the login of the sharepoint to find the details of your brand
                      </li>
                  </ol>
                  <p>
                      <h5>Uitwerking van de Kwaliteitseisen</h5>
                      De kwaliteitseisen zijn in volgorde uitgewerkt en hieronder genoteerd.
                      <ol>
                          <li>
                              Een balk die logos van bedrijven toont. Elk logo zal clickbaar/selecteerbaar zijn. Bij het clicken/selecteren van een logo zal de gebruiker naar de bedrijfs sharepoint door verwezen worden.
                          </li>
                          <li>
                              De balk zal de titel: "Participating Brands" hebben
                          </li>
                          <li>
                              De eerste logo zal die van Ahold Delhaize (moederbedrijf van ALbert Heijn) zijn, gevolgd door de logo's van de andere bedrijven.
                          </li>
                          <li>
                              De volgende tekst zal onderaan de balk zijn: +please click on the logo to get to the login of the sharepoint to find the details of your brand
                          </li>
                      </ol>
                  </p>
              </p>
              <p>
                  <h5>Ontwerp in Figma</h5>
                  Na het doornemen van de kwaliteitseisen is gekeken naar het ontwerp in Figma. Uit het ontwerp blijkt dat de tekst is aangepast en locatie is verandert. Deze is nu geheel links onder de titel: "Participating Brands". Voor de zekerheid heb ik de UX-designer geraadpleegd over het ontwerp en zijn afwijking met de kwaliteitseisen. De UX-designer verzekerde dat het design goed was en dat de kwaliteitseisen in het Jira-bord niet geheel up-to-date waren.
                  <img src={design} className={"jira"} alt={"Balk die gemaakt moest worden"}/>
              </p>
              <p>
                  <strong>Doel</strong>: het ontwikkelen van een component (balk/sectie) die de logo's van verschillende bedrijven toont.
              </p>
              <p>
                  Voor deze taak is er gebruikt gemaakt van de volgende technologie:
                  <ul>
                      <li>Intellij IDEA: dit is de omgeving waarin geprogrammeerd is</li>
                      <li>HTML & CSS: de programmeertalen die zijn gebruikt om de component te ontwikkelen</li>
                      <li>
                          Github: voor versie-controle en het intergreren van de code
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
                      <li>participating-brands.tsx [component]: bevat de balk met de logos en teksten</li>
                      <li>brandLogo.tsx [blauwdruk]: een interface voor het ophalen van de logos uit de database (CMS)</li>
                      <li>endpoint.ts [blauwdruk]: link toegevoegd vanwaar de logos moeten worden opgehaald</li>
                      <li>logo-ad.png [logo]: een logo van de AH</li>
                  </ul>
              </p>
              <p>
                  Na een zelftest is er een Pull-Request aangemaakt om deze taak af te ronden. Bij deze zelftest heb ik gelet op:
                  <ul>
                      <li>"Responsive" design/ontwikkeling: dit houdt in dat het component op elk schermgrootte werkt</li>
                      <li>Bugs en breaks: hoe reageren al ontwikkelde componenten op de nieuwe functionaliteit; de toevoegingen mogen al aanwezige functionaliteit niet beinvloeden</li>
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
              <h3 className="vertical-timeline-element-title">Pull Request Aanmaken</h3>
              <h6 className="vertical-timeline-element-subtitle">Aanvraag op goedkeuring van derden</h6>
              <p>
                  Om de nieuwe funtionaliteit toe te voegen is er gebruik gemaakt van Github Pull Request. Na het goedkeuren van de Pull Request maakt Github automatisch aanpassingen en/of toevoegingen aan de documenten in de Github Repository.
              </p>
              <p>
                  <img src={pr} className={"jira"} alt={"Pull Request Participating Brands"}/>
              </p>
              <p>
                  3 ontwikkelaars (waarvan 1 begeleider) keuren de code wijzigingen en toevoegingen goed. Taak en leerdoel succesvol behaald!
              </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${white}`, border: 'solid'}}
              contentArrowStyle={{ borderRight: `7px solid black` }}
              iconStyle={{ background: `${white}`}}
              icon={<FaTools/>}
          >
              <h3 className="vertical-timeline-element-title">Technologie en Tools</h3>
              <h6 className="vertical-timeline-element-subtitle">Gebruikt voor Code Ontwikkeling</h6>
              <p>
                  Veel van de tools, technieken en talen waar ik mee te maken kreeg waren nieuw voor mij. Hieronder zal een overzicht volgen van de technologie die is gebruikt, wat deze zijn en hoe deze gebruikt worden. Tools, technieken en talen met een ster (*) zijn in andere leerdoelen uitgewerkt.
              </p>
              <p>
                  <h4>Tools</h4>
                  <ul>
                      <li>
                          Github(*)
                          <ul>
                              <li>
                                  Github Repositories(*)
                              </li>
                              <li>
                                  Github Pull Requests(*)
                              </li>
                              <li>
                                  Github Issues(*)
                              </li>
                              <li>
                                  Github Actions(*)
                              </li>
                          </ul>
                      </li>
                      <li>
                          Jira-bord(*)
                      </li>
                      <li>
                          Commandprompt: Een software programma die een ontwikkelaars toelaat om te communiceren met de operatie systeem of applicatie (<a target={"new"} href={"https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands"}>Windows Comamnds: Command-Line Shells</a>)
                      </li>
                      <li>
                          Intellij IDEA: Een IDE (Integrated Development Environment) (Ontwikkelings Omgeving) die context-bewust is en toelaat ontwikkelingen te doen in Java en andere JVM (Java Virtual Machine) talen zoals Kotlin, Scala, etc. Intellij IDEA ondersteunt ook het ontwikkelen van web applicaties (<a target={"new"} href={"https://www.jetbrains.com/idea/features/"}>What is Intellij IDEA?</a>)
                      </li>
                  </ul>
              </p>
              <p>
                  <h4>Technieken</h4>
                  <li>
                      Lean Start-Up(*)
                  </li>
                  <li>
                      AH Template: Elk project van AH Tech Labs maakt gebruik van de AH Template. Dit template is een leeg web-pagina die toegang heeft tot de test-omgeving van ALbert Heijn. Hierdoor is het mogelijk om bijvoorbeeld test-date op te halen.
                  </li>
                  <li>
                      React met Spring:
                      <li>
                          React: Dit is een Javascript libary voor het maken van gebruikersomgevingen ( <a target={"new"} href={"https://reactjs.org/"}>React</a> ).
                      </li>
                      <li>
                          Spring: Het Spring Framework biedt een uitgebreid programmeer-en configuratiemodel voor moderne ,op Java gebaseerde, bedrijfsapplicaties ( <a target={"new"} href={"https://spring.io/projects/spring-framework"}>Spring Framework</a> ).
                      </li>
                  </li>
              </p>
              <p>
                  <h4>(Programmeer) Talen</h4>
                  <li>
                      JavaScript: Een scripting/programmeer taal die ontwikkelaars toelaat om complexe functionaliteit in web paginas te implementeren ( <a target={"new"} href={"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"}>What is JavaSript</a> ).
                  </li>
                  <li>
                      TypeScript: Een superset van JavaScript en is gemaakt om ontwikkeling in JavaScript te vergemakkelijken ( <a target={"new"} href={"https://docs.microsoft.com/en-us/shows/web-wednesday/what-is-typescript"}>What is TypeScript?</a> ).
                  </li>
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
                Bij AH Tech Labs is Continuous Intergration en Continuous Deployment geautomatiseerd met behulp van Github Actions. In Github Actions wordt dit een workflow genoemd.
            </p>
            <p>
                Om de leerdoel te behalen zijn de workflows van AH Tech Labs gebruikt. Voor ik met de workflows aan het werk gegaan ben heb ik eerst gekeken naar wat elke workflow doe en hoe deze te gebruiken is.
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
                        Deze workflow maakt een melding aan bij Microsoft Teams over de Pull Request. In de melding staat een link naar de toebehorende Pull Request zodat deze makkelijk terug te vinden is voor het team.
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