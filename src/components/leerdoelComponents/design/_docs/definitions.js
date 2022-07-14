import React from "react";
import {Accordion} from "react-bootstrap";

export const Wireframe = () => {
    return (
        <Accordion>
            <Accordion.Item>
                <Accordion.Header>
                    Wireframes.cc
                </Accordion.Header>
                <Accordion.Body>
                    <p>
                        Wireframe.cc is een online tool die gebruikers instaat stelt om snel en simpel gebruikersomgeving te ontwerpen.
                    </p>
                    <p>
                        <a
                            href={"https://wireframe.cc/"}
                        >
                            wireframe.cc, 2022
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}