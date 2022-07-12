import React from 'react';
import {Accordion} from "react-bootstrap";

export const Lean = () => {
    return (
        <Accordion defaultActiveKey={"0"} alwaysOpen>
            <Accordion.Item eventKey="0">
            <Accordion.Header>
                    Lean Start-Up
            </Accordion.Header>
            <Accordion.Body>
                <p>
                    Definitie: De Lean Startup is een methode voor het beheren en opbouwen van een bedrijf of startup door te experimenteren, testen en itereren tijdens het ontwikkelen van producten op basis van bevindingen uit testen en feedback. Deze methodologie bestaat uit 3 stappen:
                    <ul>
                        <li>Build</li>
                        <li>Measure</li>
                        <li>Learn</li>
                    </ul>
                </p>
                <p>
                    <h6>Build</h6>
                    Tijdens de "Build"-fase worden de minimale eisen van een product/applicatie bepaald ookwel Minimal Viable Product (MVP) genoemd. De ontwikkeling van de product/applicatie start vrijwel meteen nadat de MVP is bepaald. De producteigenaar bepaalt de werking en de gewenste eind resultaat van het product/applicatie.
                </p>
                <p>
                    <h6>Measure</h6>
                    Zodra een fase is afgerond gaat wordt deze meteen getest. Hierbij wordt gekeken of het ontwikkelt product/applicatie voldoet aan de minmale eisen gesteld door de producteigenaar. De ontvangen feedback en resultaten worden verzameld en gegroupeerd in o.a. layout, technische aspecten, gebruikersgemak, programma technische aspecten.
                </p>
                <p>
                    <h6>Learn</h6>
                    Op basis van de resultaten van de test worden verbeterpunten besproken. Deze verbeterpunten worden gebruikt als basis voor de volgende cyclus van de (Lean Startup) methodologie
                </p>
                <p>
                    <a
                        href={"https://www.universitylabpartners.org/blog/what-is-lean-startup-methodology"}
                    >
                        University Labpartners, 23 Maart 2020
                    </a>
                </p>
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export const Jira = () => {
    return (
      <Accordion defaultActiveKey={"0"} alwaysOpen>
          <Accordion.Item eventKey={"0"}>
              <Accordion.Header>
                  Jira - Atlassian
              </Accordion.Header>
              <Accordion.Body>
                  <p>
                      Jira Software maakt deel uit van een familie van producten die zijn ontworpen om  verschillende type teams te helpen met het beheren van software. Oorspronkelijk was Jira ontworpen als een bug- en issuetracker. Maar vandaag de dag is Jira uitgegroeid tot een krachtige management tool waardoor grote ideeën onder verdeeld kunnen worden in beheersbare onderdelen binnen de teams met behulp van userstories, issues en taken. -
                      <a
                          href={"https://www.atlassian.com/software/jira/guides/use-cases/what-is-jira-used-for#jira-for-agile-teams"}
                      >
                          Jira Software
                      </a>
                  </p>
              </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    );
}