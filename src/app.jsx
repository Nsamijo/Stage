import React from "react";
import {Row} from "react-bootstrap";
import Navigation from "./components/navigation/Navigation";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/about/about";

class App extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Navigation/>
                </Row>
                <BrowserRouter basename={process.env.PUBLIC}>
                    <Switch>
                        <Route path="/Stage/about">
                            <About/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;