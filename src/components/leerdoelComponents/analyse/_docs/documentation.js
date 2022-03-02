import {Accordion, Button, Col, OverlayTrigger, Popover, Row} from "react-bootstrap";

export const Github = () => {

    return (
      <Accordion>
        <Accordion.Item>
            <Accordion.Header>
                Github
            </Accordion.Header>
            <Accordion.Body>
                <p>
                Github is een online tool voor het gezamelijk ontwikkelen van code voor ontwikkelaars. Deze tool maakt het mogelijk om code in te zien en feedback toe te voegen. Bij Tech Labs is er voornamelijk gebruik gemaakt van de volgende functionaliteiten:
                </p>
                <p>
                <Row>
                    <Col>
                        <OverlayTrigger trigger={"click"} placement={"bottom"} rootClose={"true"} onHide={true} overlay={
                            <Popover id={"popover-basic"} placement={"right"}>
                                <Popover.Header>
                                    <a
                                        href={"https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories"}
                                        target={"new"}
                                    >
                                        Github Repositories
                                    </a>
                                </Popover.Header>
                                <Popover.Body>
                                    <p>
                                    Een repository is een locatie in Github waar alle project documenten kunnen worden opgeslagen.
                                    </p>
                                    <p>
                                        Indien er wijzigingen plaatsvinden houd Github bij:
                                        <ul>
                                            <li>Wat er is gewijzigd</li>
                                            <li>Wie de wijzigingen heeft gedaan</li>
                                        </ul>
                                    </p>
                                    <p>
                                        Om onbevoegden geen toegang te geven tot de documenten in een Github Repository kan de toegang beheerd worden door de eigenaar(s).
                                    </p>
                                </Popover.Body>
                            </Popover>
                        }>
                            <Button variant={"outline-dark"}>Github Repositories</Button>
                        </OverlayTrigger>
                    </Col>
                    <Col>
                        <OverlayTrigger trigger={"click"} placement={"bottom"} rootClose={"true"} onHide={true} overlay={
                            <Popover id={"popover-basic"} placement={"right"}>
                                <Popover.Header>
                                    <a
                                        href={"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models"}
                                        target={"new"}
                                    >
                                        Github Pull Request
                                    </a>
                                </Popover.Header>
                                <Popover.Body>
                                    <p>
                                        Een Pull Request is een formele aanvraag door een ontwikkelaar/developer om documenten in een Repository te veranderen (b.v. updaten). Hierbij kan de eigenaar van de Repository de veranderingen inzien, feedback leveren, veranderingen aanvragen en/of goedkeuren.
                                    </p>
                                    <p>
                                        Als een Pull Request wordt goedgekeurd worden alle documenten aangepast volgens de wijzigingen in de Pull Request.
                                    </p>
                                </Popover.Body>
                            </Popover>
                        }>
                            <Button variant={"outline-dark"}>Github Pull Request</Button>
                        </OverlayTrigger>
                    </Col>
                    <Col>
                        <OverlayTrigger trigger={"click"} placement={"bottom"} rootClose={"true"} onHide={true} overlay={
                            <Popover id={"popover-basic"} placement={"right"}>
                                <Popover.Header>
                                    <a
                                        href={"https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues"}
                                        target={"new"}
                                    >
                                        Github Issues
                                    </a>
                                </Popover.Header>
                                <Popover.Body>
                                    <p>
                                        Om ideeën (nieuwe features), feedback, taken en/of bugs te noteren in een Repository kan er gebruik gemaakt worden van Github Issues. Een (Github) Issue wordt geplaatst bij de desbetreffende Repository en kan door bevoegden worden gezien en opgepakt.
                                    </p>
                                </Popover.Body>
                            </Popover>
                        }>
                            <Button variant={"outline-dark"}>Github Issues</Button>
                        </OverlayTrigger>
                    </Col>
                    <Col>
                        <OverlayTrigger trigger={"click"} placement={"bottom"} rootClose={"true"} onHide={true} overlay={
                            <Popover id={"popover-basic"} placement={"right"}>
                                <Popover.Header>
                                    <a
                                        href={"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"}
                                        target={"new"}
                                    >
                                        Github Actions
                                    </a>
                                </Popover.Header>
                                <Popover.Body>
                                    <p>
                                        Github Actions is een Continiuous Integration en Continuous Delivery platform dat toelaat om automatisch de code in een Repository te bouwen, testen en online te zetten (deployen).
                                    </p>
                                </Popover.Body>
                            </Popover>
                        }>
                            <Button variant={"outline-dark"}>Github Actions</Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
                    </p>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
}

export const Probleemstelling = () => {
    return (
      <Accordion>
          <Accordion.Item>
              <Accordion.Header>
                  Probleemstelling
              </Accordion.Header>
              <Accordion.Body>
                  Hoe kan Albert Heijn zijn klanten, zo enthousiast mogelijk, over Dynamisch Afprijzen laten weten?
              </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    );
}

export const DynamischAfprijzen = () => {
    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>
                    Dynamisch Afprijzen
                </Accordion.Header>
                <Accordion.Body>
                    <p>
                        Momenteel worden producten al afgeprijsd door Albert Heijn als deze hun verval-datum naderen. Deze afprijzing bedraagt 35 procent van de productsprijs. Echter merkt Albert Heijn dat deze niet genoeg is om hun voedselverspilling doel te behalen. En heeft besloten om een nieuwe afprijs methode te ontwikkelen.
                    </p>
                    <p>
                        De nieuwe afprijs methode bouwt verder op de oude met enkele wijzigingen en toevoegingen. Deze veranderingen zijn onder andere:
                        <ul>
                            <li>
                                Wijzigingen: De afprijzing percentage bedraagt nu 20 procent inplaats van 35
                            </li>
                            <li>
                                Toevoegingen:
                                <ul>
                                    <li>
                                       Oplopende kortingpercentage met een maximale afprijzing van 70 procent
                                    </li>
                                    <li>
                                        Het kortingpercentage is afhankelijk van een aantal factoren zoals de tijd, verkoopaantal (Niet alle factoren waren bekend gemaakt)
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}