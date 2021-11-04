import React from "react";
import {Row} from "react-bootstrap";
import Navigation from "./components/navigation/Navigation";

class App extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Navigation/>
                </Row>
            </div>
        )
    }
}

export default App;