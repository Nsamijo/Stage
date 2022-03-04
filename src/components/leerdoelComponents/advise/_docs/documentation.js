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
                      Een advies is een mening of aanbeveling die wordt aangeboden als leidraad voor actie, gedrag, etc
                  </p>
                  <p>
                      <a
                          href={"https://www.dictionary.com/browse/advice"}
                      >
                          Collins English Dictionary, 2012
                      </a>
                  </p>
              </Accordion.Body>
          </Accordion.Item>
      </Accordion>
    );
}