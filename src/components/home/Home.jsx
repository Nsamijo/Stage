import React from "react";
import Navigation from "../navigation/Navigation";
import {Container, Row} from "react-bootstrap";
import {Route, Switch} from "react-router-dom";
import About from "../about/about";

import './Home.css';

class Home extends React.Component {
  render () {
    return (
        <Container>
            <Row>
                <Navigation/>
            </Row>
            <Switch>
              <Route path="/about">
                <About/>
              </Route>
            </Switch>
        </Container>
    );
  }
}

export default Home;
