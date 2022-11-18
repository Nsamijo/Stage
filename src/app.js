import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import Leerdoelen from "./components/Leerdoelen/leerdoelen";
import Bijlage from "./components/bijlage/bijlage";
import About from "./components/about/about";
import {Container} from "react-bootstrap";

import './index.css';

function App() {
    return (
        <Router
        >
            <Navigation/>
            <Container className="content">
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/Leerdoelen">
                    <Leerdoelen/>
                </Route>
                <Route exact path={"/Bijlage"}>
                    <Bijlage/>
                </Route>
                <Route exact path="/About">
                    <About/>
                </Route>
            </Container>
        </Router>
    )
}

export default App;