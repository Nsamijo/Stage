import React from "react";
import {HashRouter as Router} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>
            </div>
        </Router>
    )
}

export default App;