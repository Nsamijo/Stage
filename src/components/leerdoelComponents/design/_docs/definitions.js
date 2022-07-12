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
                        Wireframe.cc is een onlien tool die gebruikers toelaat om snel en simpel gebruikersinterfaces te ontwerpen.
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