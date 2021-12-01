import React from "react";
import {HashRouter as Router} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation/>
            </div>
            <footer>
                {/*TO DO: ADD FOOTER*/}
                <div>
                <br/>
                </div>
            </footer>
        </Router>
    )
}

export default App;