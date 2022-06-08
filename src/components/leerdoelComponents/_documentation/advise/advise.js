import {Container} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineFlag, AiOutlineFunction} from "react-icons/ai";
import {FaFlagCheckered, FaPuzzlePiece} from "react-icons/fa";

import Price from './Prijs.png';
import Store from './voorraad.png';
import './advise.css';


export const Leerdoel4 = () => {
    const white = 'rgb(255, 255, 255)';
    return (
    <Container className="project">
        <VerticalTimeline layout={"1-column-left"} lineColor={"grey"}>
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
                icon={<AiOutlineFunction/>}
            >
                <h3 className="vertical-timeline-element-title">Belangrijke Functionaliteiten</h3>
                <h6 className="vertical-timeline-element-subtitle">Brainstorm Digitale Koopjeshoek</h6>
                <p>
                    Tijdens de Brainstorm-sessie van de Digitale Koopjeshoek pleitte ik voor de volgende functionaliteiten:
                    <ul>
                        <li>Het aangeven van een afwijkende voorraad: De voorraad kan afwijken</li>
                        <li>Het tonen van de afprijsingen: Klant ziet dan de nieuwe prijs van het product</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: `${white}`, border: 'solid'}}
                contentArrowStyle={{ borderRight: `7px solid black` }}
                iconStyle={{ background: `${white}`}}
                icon={<FaPuzzlePiece/>}
            >
                <h3 className="vertical-timeline-element-title">Afwijkende Voorraad</h3>
                <h6 className="vertical-timeline-element-subtitle">Redenering Functionaliteit</h6>
                <p>
                    <b>Oorzaak/Probleem:</b> Het verwerken van de data (afgeprijsde producten verkocht) per winkel duurt tussen de 10 en 60 minuten. Hierdoor kan het zijn dat afgeprijsde producten worden getoond die al zijn verkocht.
                    <br/>
                    <b>Redenering Functionaliteit</b>
                    <ul>
                        <li>Verwachtings-management: de klant is op de hoogte van de afwijkende voorraad en hierdoor wordt de kans van teleurstelling vermindert</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: `${white}`, border: 'solid'}}
                contentArrowStyle={{ borderRight: `7px solid black` }}
                iconStyle={{ background: `${white}`}}
                icon={<FaPuzzlePiece/>}
            >
                <h3 className="vertical-timeline-element-title">Actuele Prijzen</h3>
                <h6 className="vertical-timeline-element-subtitle">Redenering Functionaliteit</h6>
                <p>
                    <b>Oorzaak/Probleem:</b> Elke product heeft een bepaalde korting.
                    <br/>
                    <b>Redenering Functionaliteit</b>
                    <ul>
                        <li>Prijs: de klant ziet de korting en de nieuwe prijs. Hierdoor kan de klant meteen het verschil in prijs zien.</li>
                    </ul>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: `${white}`, border: 'solid'}}
                contentArrowStyle={{ borderRight: `7px solid black` }}
                iconStyle={{ background: `${white}`}}
                icon={<FaPuzzlePiece/>}
            >
                <h3 className="vertical-timeline-element-title">Functionaliteiten Verwerkt</h3>
                <h6 className="vertical-timeline-element-subtitle">Realisatie Functionaliteiten</h6>
                <p>
                    Beide functionaliteiten zijn verwerkt in het eindproduct. Hierbij is een foto van elke functionaliteit gezet als bewijs:
                    <br/>
                    <b>Afwijkende Voorraad</b>
                    <br/>
                    <img className='voorraad' src={Store} alt={"Disclaimer component"}/>
                    <br/>
                    <b>Nieuwe Prijs</b>
                    <br/>
                    <img className='voorraad' src={Price} alt={"Price Component"}/>
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
    )
}