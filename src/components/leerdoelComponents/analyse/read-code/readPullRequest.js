import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import PullRequest from "../../_documentation/analyse/read-code/pull-request";
import {Github} from "../_docs/defenitions";
import {analyse, feedback} from "../../../../constants/content";

const ReadCode = () => {
    return (
        <Container className={"containerStyle"}>
            <Row>
                <h2>Leerdoel: Analyseren</h2>
                <div className="leerdoel">
                    {analyse.leerdoel1}
                </div>
            </Row>
            <Row>
                <p>
                    Dit leerdoel gaat over het analyseren van processen, producten en informatiestromen in hun onderlinge samenhang en context.
                </p>
                <p>
                    <h5>Leerdoel Context</h5>
                    <p>
                        Bij dit leerdoel is er gekozen om de code (features)  ontwikkelt door een mede stagaire te analyseren. Bij de analyse moet duidelijk worden wat de code zal doen en of deze voldoet aan de kwaliteitseisen van Tech Labs.
                    </p>
                    <p>
                        Voor dit leerdoel is er eerst gekeken hoe AH Tech Labs met applicatie (code) omgaat. Hoe veranderingen (updates) worden gedaan. De coderingsregels (code standaarden) die gehanteerd wordt door AH Tech Labs.
                    </p>
                    <p>
                        AH Tech Labs beheert zijn code met behulp van de tool genaamd: Github. Voor het aanbrengen van veranderingen werd een functionaliteit van Github gebruikt; Pull Request. Verder werd duidelijk dat AH Tech Labs gebruik maakt van de coderingsregels van de gekozen project (programeer)taal en een aantal eigen standaarden. Deze standaarden heb ik onderverdeel in:
                        <ul>
                            <li>
                                Leesbaarheid
                            </li>
                            <li>
                                Netheid
                            </li>
                            <li>
                                Programmeertaal structuur
                            </li>
                        </ul>
                    </p>
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
                    <h5>Documentatie Omschrijving</h5>
                    <p>
                        Door onderzoek te doen naar de gebruikte tool kon ik wijzigingen (updates) goed-/afkeuren en doorvoeren. Deze wijzigingen moesten allemaal voldoen aan de coderingsregels van AH Tech Labs. Indien er wijzingingen waren die niet voldeden aan deze coderingsregels werd het volgende gedaan:
                        <ul>
                            <li>
                                Opmerking met coderingsregel(s) die niet waren nagekomen
                            </li>
                            <li>
                                Aanvraag voor wijziging
                            </li>
                            <li>
                                Optioneel: suggestie van aanpassing die gemaakt moet worden
                            </li>
                        </ul>
                        Pas als de wijzingingen voldeden aan alle coderingsregels konden ze worden doorgevoerd. Hiermee bewaard AH Tech Labs de kwaliteit van de code.
                        <p>
                            In de documentatie is een Pull Request meegenomen die voldoet aan alle eisen. Wegens de geheimshoudingsverklaring mocht een selectief aantal, door mij gekeurde, Pull Requests gebruikt worden.
                        </p>
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
                            <Row>
                                <h5>Feedback Stagebegeleider</h5>
                                <div className={"leerdoel"}>
                                    {feedback.leerdoel2}
                                </div>
                            </Row>
                            <Row>
                                <p>
                                    <h5>Reflectie</h5>
                                </p>
                                <p>
                                    Door te werken aan dit leerdoel wilde ik mijn technische inzicht en kennis uitbreiden.
                                </p>
                                <p>
                                    Tijdens dit leerdoel heb ik meer kennis opgedaan van Github. Dit was in eerdere projecten, van de Hogeschool Rotterdam, gebruik maar niet als bij AH Tech Labs.
                                    <p>
                                        Verder heb ik ook 2 nieuwe programmeertalen geleerd. Deze programmeertalen zijn JavaScript en TypeScript.
                                    </p>
                                </p>
                                <p>
                                    Tegen het eind van mijn stage keurde ik vaak Pull Requests goed/af, afhankelijk als ze aan alle standaarden voldoen. En kon ik veel van de ontwikkelde functionaliteiten lezen en begrijpen. Wel had ik soms moeite om backend functionaliteiten te begrijpen.
                                    <p>
                                        Om dit te bereiken heb ik het volgende gedaan:
                                        <ul>
                                            <li>
                                                Bij code die ik niet begreep, plaatste ik een opmerking. Deze opmerking was een variantie van: "Waarvoor dient dit?".
                                                <ul>
                                                    <li>
                                                        Bij Pull Request waar dit niet kon las ik gewoon de code en benaderde dan de mede-stagaire/ontwikkelaar met de vraag: "Hoe werkt je code?"
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                De coderingsregels doorgenomen en gebruikt als uitgangspunten
                                            </li>
                                            <li>
                                                Bij Pull Requests geopened bij mij waren er in het begin altijd opmerkingen. Deze opmerkingen waren vaak:
                                                <ul>
                                                    <li>
                                                        Let op het structuur van je code.
                                                    </li>
                                                    <li>
                                                        Vermijd herhalingen
                                                    </li>
                                                    <li>
                                                        Geen console.log
                                                    </li>
                                                </ul>
                                                Door te letten op mijn eigen structuur en dit te vergelijken met anderen kon ik mijn programmeerskills verbeteren. Hierdoor begon ik beter te worden in het lezen en programmeren van code.
                                            </li>
                                        </ul>
                                    </p>
                                </p>
                                <p>
                                    Ik beoordeel mijn inzet bij dit leerdoel als een voldoende.
                                </p>
                                <p>
                                    De aanpak die ik heb gebruikt verbeterde mijn programmeerskills aanzienlijk. Deze kennis echter is alleen van de frontend/gebruikersomgeving. Voor de volgende stage zal ik meer aandacht besteden aan het programmeren voor de backend.
                                </p>
                                <p>
                                    De vorderingen die zijn gemaakt zijn:
                                    <ul>
                                        <li>
                                            Het kunnen lezen van code geschreven door anderen
                                        </li>
                                        <li>
                                            Code beoordelen op basis van code standaarden
                                        </li>
                                        <li>
                                            Beter programmeren door in mijn  eigen code de code standaarden te verwerken
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    De vorderingen die ik heb gemaakt, zijn naar mijn mening, best groot. Ik ben beter geworden in het programmeren en het begrijpen van code.
                                </p>
                                <p>
                                    Voor de toekomst zal ik meenemen het kunnen lezen en begrijpen van door andere geschreven code. Dit is heel handig als ik verder moet werken aan al bestaande applicaties/projecten.
                                </p>
                                <p>
                                    Voor de volgende stage zal ik meer aandacht besteden aan de backend. Meer tijd en vragen stellen over hoe deze werkt.
                                </p>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
            <br/>
        </Container>
    )
}

export default ReadCode;