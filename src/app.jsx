import React from "react";
import Navigation from "./components/navigation/Navigation";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/about/about";

function App() {
    return (
        <Router>
            <div className="App">
                    <Navigation/>
                <div className="Content">
                    <Switch>
                        <Route path="/Stage/About">
                            <About/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;