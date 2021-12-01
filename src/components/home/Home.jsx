import React from "react";

import './Home.css';
import {Col, Row} from "react-bootstrap";

const Home = () => {
    return (
        <Row>
            <Col lg={8}>
                <h1>Algemeen</h1>
                Het derde studie jaar van de opleiding Informatica aan de Hogeschool Rotterdam bestaat uit 2 delen namelijk:
                <ol>
                    <li>Stage</li>
                    <li>Minor</li>
                </ol>
                Voor gedurende 5 tot 6 maanden loop ik (Nathan K. Samijo) mee bij een door mij gekozen bedrijf. Tijdens mijn stage kan ik werkervaring opdoen en mijn tot nu toe opgedane kennis toepassen.
                <br/>
                <br/>
                <h3>Stage Bedrijfsomschrijving Nathan K. Samijo</h3>
                Ik heb gekozen om mijn stage te doen bij Albert Heijn op de afdeling Tech Labs met de focus op innovatie binnen de Albert Heijn. Albert Heijn is een Nederlandse supermarkt keten die inmiddels al ruim 130 jaar bestaat. Met meerdere vestigingen in landen, zoals België, Duitsland en zelfs Curaçao, kan gezegd worden dat Albert Heijn een internationaal bedrijf is.
                <br/>
                Met 895 winkels en ongeveer 100.000 werknemers is Albert Heijn een van de grootste werkgevers in Nederland. Albert Heijn heeft verschillende soorten winkels namelijk:
                <br/>
                <br/>
                <dl>
                    <dt>Albert Heijn supermarkten</dt>
                    <dd>
                        Albert Heijn supermarkten zijn supermarkten met een ruim assortiment die de klant de keuze geeft uit verschillende A-merken en eigen merk waaronder het Albert Heijn huismerk.
                    </dd>
                    <dt>Albert Heijn To Go</dt>
                    <dd>
                        Albert Heijn to go staat voor good food to go. Deze winkels zijn voor mensen onderweg, met een druk leven, die behoefte hebben aan lekkere verse en verantwoorde producten.
                    </dd>
                    <dt>Albert Heijn Online</dt>
                    <dd>
                        Albert Heijn Online is laat de klant toe om via het internet boodschappen te doen. De gekochte boodschappen worden geleverd aan huis of bij een pick up point (hier kan een klant zijn boodschappen afhalen op een voor afgesproken tijd).
                    </dd>
                </dl>

                <h4>Stage Opdracht</h4>
                Tijdens mijn stage bij Albert Heijn draait het om het uitvoeren van een innovatieproject van A tot Z. Ik kan meedenken in het bedenken van nieuwe ideeën op basis van technologie en mag deze ook zelf live zetten. Dit doe ik samen in het team van ontwikkelaars. In overleg is onderzoek doen ook mogelijk (maximaal 2 dagen per week).
                Mijn takenpakket bestaat o.a. uit het volgende werkzaamheden:
                <ul>
                    <li>Het bedenken van nieuwe innovaties op basis van nieuwe technologie (b.v. augmented reality)</li>
                    <li>Het ontwikkelen en live zetten van de innovaties in de AH.nl omgeving </li>
                    <li>Het testen van nieuwe innovaties op basis van de Build – Measure – Learn methodiek</li>
                    <li>Zoveel mogelijk kennis op doen over de Lean-Startup en Kanban methodiek</li>
                    <li>Samenwerken met andere afdelingen (b.v. marketing, communicatie)</li>
                </ul>
                Aan het eind moet ik minimaal 2 projecten live hebben.

            </Col>
        </Row>
    );
}

export default Home;
