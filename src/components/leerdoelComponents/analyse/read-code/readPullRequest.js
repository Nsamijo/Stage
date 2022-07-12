import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import PullRequest from "../../_documentation/analyse/read-code/pull-request";
import {Github} from "../_docs/defenitions";
import {analyse} from "../../../../constants/content";

const ReadCode = () => {
    return (
        <Container className={"containerStyle"}>
            <Row>
                <h2>Leerdoel</h2>
                <div className="leerdoel">
                    {analyse.leerdoel1}
                </div>
            </Row>
            <Row>
                <p>
                    <h5>Analyseren</h5>
                    <p>
                        Dit leerdoel gaat over het analyseren van processen, producten en informatiestromen in hun onderlinge samenhang en context.
                    </p>
                </p>
                <p>
                    Bij dit leerdoel is er gekozen om de code (features)  ontwikkelt door een mede stagaire te analyseren. Bij de analyse moet duidelijk worden wat de code zal doen en of deze voldoet aan de kwaliteitseisen van Tech Labs.
                </p>
                <p>
                    <h5>Bedrijfs Context</h5>
                    <p>
                        Elk bedrijf dat code bezit moet deze makkelijk kunnen opslaan en beheren. AH Tech Labs gebruikt hiervoor de online oplossing Github.
                    </p>
                    <p>
                        <Github/>
                    </p>
                    <p>
                        <h6>Werkwijze</h6>
                        Als een taak (feature) is afgerond word er eerst een Pull Request geopened om dit aan te geven. Een Pull Request wordt pas goedgekeurd als het voldoet aan de volgende eisen:
                        <ul>
                            <li>Goedkeuring van minimaal 2 mensen waarvan 1 een Tech Labs begeleider is</li>
                            <li>Alle testen van Github Actions succesvol heeft doorlopen</li>
                        </ul>
                    </p>
                    <p>
                        <h6>Code Standaarden</h6>
                        Hier zal  beschreven worden aan welke standaarden de code moest voldoen.
                        Ontwikkelde code moest voldoen aan de volgende eisen:
                        <ol>
                            <li>
                                Het moest de code conventies (codering regels) volgen van de gebruikte taal. In dit geval moest het voldoen aan de coderingsregels van React, Javascript en CSS . Een paar van de coderingsregels zijn (<a href={"https://medium.com/@navitasinghal77/react-coding-standards-and-practices-3b133bcaea8"}>Singhal, N. (2021, december 16)</a>):
                                <ul>
                                    <li>React UI componenten moeten benaamd worden in PascalCase.Voorbeeld: InlogBalk</li>
                                    <li>
                                        DRY principe. DRY staat voor Don't Repeat Yourself. Dit houdt in dat er geen herhalingen van code mogen zijn.
                                    </li>
                                    <li>
                                        CSS-bestanden moeten dezelfde naam hebben als de component. Een css-bestand bevat de stijl instructies voor een component. Voorbeeld: InlogBalk.css
                                    </li>
                                    <li>
                                        Doe een code review/test voor het aanmaken van een Pull Request
                                    </li>
                                    <li>
                                        Geef bestanden een logische naam. Deze naam moet aangeven welke functionaliteit zit in het bestand. Voorbeeld: InlogBalk.js
                                    </li>
                                </ul>
                                <li>
                                    Van AH Tech Labs:
                                    <ul>
                                        <li>
                                            Netheid: foutmeldingen worden keurig afgewerkt. Geen "console.log" in de code. Een "console.log" wordt gebruikt door ontwikkelaars om fout-meldingen te weergeven in de browser. Voor een gebruiker heeft een "console.log" geen toegevoegde waarde.
                                        </li>
                                        <li>
                                            Leesbaarheid: variabelen, functies en componenten hebben een logische naam. Deze naam heeft betrekking om hun functie.
                                        </li>
                                        <li>
                                            Verder wordt ook gekeken naar de structuur van de code. De code-structuur die wordt gehanteerd is afhankelijk van de taal die gebruikt wordt. In AH Tech Labs is er o.a. gebruik gemaakt van de programmeertalen: Typescript, Javascript, CSS, HTML en Java.
                                        </li>
                                    </ul>
                                </li>
                            </li>
                        </ol>
                        <p>
                            Ontwikkelde code moet aan alle bovengenoemde standaarden voldoen. Indien 1 standaard niet is gehanteerd wordt de Pull Request niet goedgekeurd. Hierbij wordt dan een opmerking (feedback) en vraag voor aanpassing geplaats bij de Pull Request. De ontwikkelaar die de Pull Request kan dan de code aanpassen op basis van de feedback.
                        </p>
                    </p>
                </p>
                <p>
                    <h5>Leerdoel Behaald</h5>
                    <p>
                        Om dit leerdoel te behalen zijn een aantal Pull Request nagekeken waarvan onderstaand maar 1 beschreven wordt. In de beschrijving zijn de conclusie en bijbehorend beeld materiaal meegenomen.
                    </p>
                </p>
            </Row>
            <Row>
            <h5>Documentatie</h5>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        Pull Request Demonstratie
                    </Accordion.Header>
                    <Accordion.Body>
                        <PullRequest/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Row>
            <br/>
            <Row>
                <h5>Feedback en Reflectie</h5>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Feedback en Reflectie
                        </Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <br/>
        </Container>
    )
}

export default ReadCode;