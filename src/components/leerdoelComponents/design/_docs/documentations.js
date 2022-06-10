import {Container} from "react-bootstrap";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";


import landing from "./_img/landing.png";
import store from "./_img/allproducts.png";
import product from "./_img/product.png";

import './_documentation.css';
import {AiOutlineFlag} from "react-icons/ai";
import {FaFlagCheckered} from "react-icons/fa";

export const Design = () => {
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
                    // icon={<HiOutlineClipboardList/>}
                >
                    <h3 className="vertical-timeline-element-title">Ontwerp Maken</h3>
                    <h6 className="vertical-timeline-element-subtitle">Eisen van het ontwerp</h6>
                    <p>
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${white}`, border: 'solid'}}
                    contentArrowStyle={{ borderRight: `7px solid black` }}
                    iconStyle={{ background: `${white}`}}
                    // icon={<HiOutlineClipboardList/>}
                >
                    <h3 className="vertical-timeline-element-title">Het Ontwerp</h3>
                    <h6 className="vertical-timeline-element-subtitle">De gebruikersinterface in Wireframe.cc</h6>
                    <p>
                        <h5>Landingspagina van de klant</h5>
                        <img src={landing} className={"images"} alt={"De eerste pagina die de klant ziet"}/>
                    </p>
                    <p>
                        <h5>Overzicht van alle afgeprijsde producten van de geselecteerde winkel</h5>
                        <img src={store} className={"images"} alt={"Overzicht van alle afgeprijsde producten"}/>
                    </p>
                    <p>
                        <h5>Overzicht van een geselecteerd product</h5>
                        <img src={product} className={"images"} alt={"Productoverzicht"}/>
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
};