import React from "react";
import {Row} from "react-bootstrap";
import {Route, Switch} from "react-router-dom";
import About from "./components/about/about";
import Navigation from "./components/navigation/Navigation";

class App extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Navigation/>
                </Row>
                <Switch>
                  <Route path="/about">
                    <About/>
                  </Route>
                </Switch>
            </div>
        )
    }
}

export default App;