import React from "react";
// import {Link, Route, Switch} from "react-router-dom";
// import {Container, Row} from "react-bootstrap";

import './Home.css';
// import About from "../about/about";
import Navigation from "../Navigation";
import {Container, Row} from "react-bootstrap";

class Home extends React.Component {
  render () {
    return (
        <Container>
            <Row>
                <Navigation/>
            </Row>
            {/*<Switch>*/}
            {/*  <Route exact path="/">*/}
            {/*    <Home/>*/}
            {/*  </Route>*/}
            {/*  <Route path="/about">*/}
            {/*    <About/>*/}
            {/*  </Route>*/}
            {/*</Switch>*/}
        </Container>
    );
  }
}

export default Home;
