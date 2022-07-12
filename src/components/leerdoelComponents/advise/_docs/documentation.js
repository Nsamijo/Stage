import React from 'react';
import {Accordion} from "react-bootstrap";

export const Advies = () => {
    return (
      <Accordion>
          <Accordion.Item>
              <Accordion.Header>
                  Advies
              </Accordion.Header>
              <Accordion.Body>
                  <p>
                      Een advies is een mening of aanbeveling.
                  </p>
              </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    );
}