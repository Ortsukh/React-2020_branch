import React, { Component } from "react";

import Header from "../header";
// import RandomPlanet from "../random-planet";

import { PlanetList, PlanetDetails, RandomPlanets } from "../sw-components";
import Row from "../row";
import { SwapiServiceProvider } from "../../context";
import SwapiService from "../../services/swapi-service";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPlanet: null
  };
  onPlanetSelected = selectedPlanet => {
    this.setState({
      selectedPlanet
    });
  };
  render() {
    const { selectedPlanet } = this.state;
    const planetList = <PlanetList onItemSelected={this.onPlanetSelected} />;
    const planetDetails = <PlanetDetails itemId={selectedPlanet} />;
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="stardb-app">
          <Header />
          <RandomPlanets />

          <Row left={planetList} right={planetDetails} />
        </div>
      </SwapiServiceProvider>
    );
  }
}
