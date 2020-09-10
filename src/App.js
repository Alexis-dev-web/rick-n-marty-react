import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "./component/Navbar";
import CardsCharacters from "./component/CardsCharacters";
import Features from "./component/Features";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
    return(
      <div className="App">
          <Router>
          <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Features" component={Features}>
            <Features />
          </Route>
          <Route path="/" component={CardsCharacters}>
            <CardsCharacters />
          </Route>
        </Switch>
    </Router>
        </div>
    )
}

export default NavBar;