import {Container} from "react-bootstrap";
import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {AiOutlineFlag, AiOutlineFunction} from "react-icons/ai";
import {FaFlagCheckered, FaPuzzlePiece} from "react-icons/fa";
import {IoFootsteps} from "react-icons/io5";


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
                    Wegens een geheimhoudings verklaring met de Albert Heijn kan het zijn dat er weinig tot geen  beeld materiaal aanwezig is bij de documentatie. Ook kan het zijn dat informatie is weggelaten.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: `${white}`, border: 'solid'}}
                contentArrowStyle={{ display: `none` }}
                iconStyle={{ display: 'none'}}
            >
                <p>
                    De adviezen die zijn gedaan ontstonden uit gesprekken met derden en mede-stagaires. In deze gesprekken werd o.a. besproken waarom een functionaliteit belangrijk was, hoe deze het beste geimplementeerd kan worden en de toegevoegde waarde van de functionaliteit voor de klant.
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
                        <li>Het tonen van de afgeprijsde producten: Klant ziet dan de nieuwe prijs van het product</li>
                    </ul>
                </p>
                <p>
                    Voor mij waren dit de belangrijkste functionaliteiten die verwerkt moesten worden. Hieronder zal beschreven worden waarom.
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
                    <b>Oorzaak/Probleem:</b> Het verwerken van de data (afgeprijsde producten verkocht) per winkel duurt tussen de 10 en 60 minuten. Hierdoor kan het zijn dat afgeprijsde producten die getoond worden al zijn verkocht.
                    <br/>
                    <b>Redenering Functionaliteit</b>
                    <ul>
                        <li>Verwachtings-management: de klant is op de hoogte van de afwijkende voorraad en hierdoor wordt de kans van teleurstelling vermindert</li>
                    </ul>
                </p>
                <p>
                     Om teleurstelling bij de klant te voorkomen is het van belang om de voorraad afwijking te geven.
                </p>
                <p>
                    <h5>Advies voor Disclaimer</h5>
                    Het volgende advies uitte ik:
                    <p>
                        Het kan zijn dat een klant speciaal voor 1 afgeprijsde product naar een winkel reist. Als het gewenste product niet meer in voorraad is kan het zijn dat de klant teleurgesteld raakt. De klant kan dan bijvoorbeeld denken:
                        <ul>
                            <li>Verspilling van tijd: de klant is naar een Albert Heijn locatie gegaan die afwijkt van zijn voorkeuren, benzine kosten en/of reistijd</li>
                        </ul>
                        Deze teleurstelling kan de klant boos (geirriteerd) maken. Het kan dan zijn dat de klant dit uit op de medewerkers van de Albert Heijn. Dit moeten we absoluut niet hebben.
                    </p>
                    <p>
                        Bij het zetten van een disclaimer is de klant dan bewust van de risico. Het nadeel is wel dat klanten dan denken: "Als er geen garantie is dat het product er is dan hoeft het niet meer". Hierdoor ontstaat wel de mogelijk dat het product niet verkocht wordt.
                    </p>
                    <p>

                    </p>
                </p>
                <p>
                    <h5>Advies Oorsprong</h5>
                    <p>
                        In een gesprek met mijn genoemde oom kwam aan de orde de voorraad. Hierbij werd gevraagd of het mogelijk was of de afgeprijsde producten te reserveren zijn. Zo niet hoe zorg je ervoor dat klanten niet teleurgesteld raken? Voorstel: korte tekst die toelicht dat de voorraad afwijkt met andere woorden een disclaimer.
                    </p>
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
                    <p>
                        <h5>Advies voor Actuele Prijzen</h5>
                        Het volgende advies uitte ik:
                        <p>
                            Voor een klant zijn afgeprijsde producten aantrekkelijk. Gekeken naar de producten in de bonus, van Albert Heijn, wordt daar de actie prijs getoond.
                        </p>
                        <p>
                            Het tonen van de nieuwe prijs kan de klant meteen zien hoeveel deze bespaart.
                        </p>
                    </p>
                    <br/>
                </p>
                <p>
                    <h5>Advies Oorsprong</h5>
                    <strong>
                        Veel teamleden hadden hetzelfde idee. Hier werd dit advies ge-uit als bevestiging van de adviezen van de andere teamleden.
                    </strong>
                    <p>
                        Als groep waren we het eens dat actie prijzen aantrekkelijk zijn voor klanten. Denkende aan bijvoorbeeld sales van kledingwinkels, Black Friday, Cyber Monday, etc.
                    </p>
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
                    Beide functionaliteiten zijn verwerkt in het eindproduct. Hierbij is een foto van elke functionaliteit gezet als bewijs.
                    <br/>
                    Alle ontwerpen hieronder zijn ontworpen door de UX-designer van het team.
                    <br/>
                    <br/>
                    <b>Afwijkende Voorraad</b>
                    <br/>
                    De disclaimer zal boven de dynamisch afgeprijsde producten geplaats worden.
                    <img className='voorraad' src={Store} alt={"Disclaimer component"}/>
                    <br/>
                    <br/>
                    <b>Nieuwe Prijs</b>
                    <br/>
                    Elk dynamisch afgeprijsd product zal getoond worden met:
                    <ol>
                        <li>Productsinformatie (foto, titel en inhoud)</li>
                        <li>
                            Huidige kortingspercentage
                        </li>
                        <li>
                            Nieuwe prijs
                        </li>
                        <li>
                            Oude prijs
                        </li>
                        <li>
                            Vervaldatum
                        </li>
                    </ol>
                    <img className='voorraad' src={Price} alt={"Price Component"}/>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{ borderRight: `7px solid  black`}}
                iconStyle={{ background: `${white}`}}
                icon={<FaFlagCheckered/>}
            />
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: `${white}`, border: 'solid'}}
                contentArrowStyle={{ borderRight: `7px solid black` }}
                iconStyle={{ background: `${white}`}}
                icon={<IoFootsteps/>}
            >
                <h3 className="vertical-timeline-element-title">In de Toekomst</h3>
                <h6 className="vertical-timeline-element-subtitle">Hoe ik adviezen zal geven in de toekomst</h6>
                <p>
                    Tijdens mijn stage ben ik instaat geweest om adviezen te bespreken (verder uitgewerkt in mijn reflectie).
                </p>
                <p>
                    In mijn volgende stage zal ik meer mijn mening/advies delen over mogelijke functionaliteiten, oplossingen en/of uitdagingen. Hierbij zal ik de advies formuleren als:
                    <ul>
                        <li>
                            "Ik vindt dat [functionaliteit/oplossing/uitdaging] nodig is want [motivatie]"
                        </li>
                        <li>
                            "Ik denk hierbij aan [functionaleit/oplossing/uitdaging]"
                        </li>
                    </ul>
                </p>
                <p>
                    In mijn volgende stage zal ik ook het volgende doen:
                    <ul>
                        <li>
                            Mijn mening geven over bijvoorbeeld functionaliteit
                        </li>
                        <li>
                            Het discussieren van functionaliteiten met anderen
                        </li>
                        <li>
                            Motiveren: het motiveren van mijn mening over potentiële functionaliteit
                        </li>
                    </ul>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </Container>
    )
}