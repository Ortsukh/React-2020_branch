import React, { Component } from "react";

import Header from "../header";

import { RandomPlanets } from "../sw-components";
import { PlanetPage, PeoplePage, StarshipPage, PersonPage } from "../pages";
import { SwapiServiceProvider } from "../../context";
import SwapiService from "../../services/swapi-service";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Router>
            <Header />
            <RandomPlanets />
            <Switch>
              <Route path="/" render={() => <h1>Welcome!</h1>} exact />
              <Route path="/people" component={PeoplePage} exact />
              <Route path="/people/:id" component={PersonPage} />
              <Route path="/planets/:id?" component={PlanetPage} />
              <Route path="/starships" component={StarshipPage} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </Router>
        </div>
      </SwapiServiceProvider>
    );
  }
}
