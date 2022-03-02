import {Accordion} from "react-bootstrap";

export const FeedbackUitleg = () => {
    return (

        <Accordion>
            <Accordion.Item>
                <Accordion.Header>
                    Over Feedback
                </Accordion.Header>
                <Accordion.Body>
                    <p>
                        Feedback is een reactie of informatie die ontstaat door de acties of het gedrag van een individu
                        of groep. In een leer en ontwikkeling context is zowel positieve als negatieve feedback
                        cruciaal. Feedback kan gebruikt worden om continu te groeien als individu of groep.
                    </p>
                    <p>
                        <a
                            href={"https://leolearning.com/blog/learning-content/what-is-feedback-and-why-is-it-important/"}
                        >
                            LEO Learning, 22 November 2016
                        </a>
                    </p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}