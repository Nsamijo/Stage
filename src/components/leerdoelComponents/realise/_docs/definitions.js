import {Accordion} from "react-bootstrap";

export const Figma = () => {
    return (
      <Accordion>
          <Accordion.Item>
              <Accordion.Header>
                  Figma
              </Accordion.Header>
              <Accordion.Body>
                  <p>
                      Figma is een online grafische design applicatie. Met als grootste factor het live samenwerken aan hetzelfde project/design/document.
                  </p>
                  <p>
                      <a
                          href={"https://www.figma.com/about/"}
                          target={"new"}
                      >
                          Figma
                      </a>
                  </p>
              </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    );
}

export const CI = () => {
    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>
                    Continuous Integration en Continuous Deployment Betekenis
                </Accordion.Header>
                <Accordion.Body>
                    <p>
                        <h5>Continuous Integration (CI)</h5>
                        <p>
                            Continuous Integration is een software proces van het automatisch intergreren van code wijzigingen/toevoegingen, van meerdere ontwikkelaars, in een software project. Geautomatiseerde tools kunnen gebruikt worden om de correctheid van de code wijzigingen/toevoegingen te bepalen voor deze geintergreerd word. Nadat de wijzigingen/toevoegingen zijn doorgevoerd kan de code gebouwd en getest worden.
                        </p>
                        <p>
                            Kort gezegd: Continuous Integration laat ontwikkelaars toe om in parallel verschillende taken uit te voeren. Na het uitvoeren van deze taken kunnen de resultaten snel en geordend samengevoegd worden. -
                            <a
                                href={"https://www.atlassian.com/continuous-delivery/continuous-integration"}
                                target={"new"}
                            >
                                &nbsp;Atlassian
                            </a>
                        </p>
                    </p>
                    <p>
                        <h5>Continuous Deployment (CD)</h5>
                        <p>
                            Continuous Deployment is een software release proces dat gebruik maakt van automatische testen voor code wijzigingen/toevoegingen in een software project. De resultaten van de testen bepalen of de geupdate code, inclusief ongewijzigde code, gedeploy (online/live zetten) kan worden.
                        </p>
                        <p>
                            Kort gezegd: Continuous Deployment zorgt ervoor dat code wijzigingen/toevoegingen, indien correct, automatisch live gezet wordt. -
                            <a
                                href={"https://www.atlassian.com/continuous-delivery/continuous-deployment"}
                                target={"new"}
                            >
                                &nbsp;Atlassian
                            </a>
                        </p>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export const Actions = () => {
    return (
        <Accordion>
            <Accordion.Item>
            <Accordion.Header>
                Github Actions
            </Accordion.Header>
            <Accordion.Body>
                Github Actions is een Continuous Integration en Continuous Delivery platform dat toelaat om automatisch de code in een Repository te bouwen, testen en online te zetten (deployen). - <a target={"new"} href={"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"}>Github Actions</a>
            </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
};