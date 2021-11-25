import React from "react";
import Navigation from "./components/navigation/Navigation";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/about/about";
import Home from "./components/home/Home";

function App() {
    return (
        <Router>
            <div className="App">
                    <Navigation/>
                <div className="Content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
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