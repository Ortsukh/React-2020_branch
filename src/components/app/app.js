import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    // selectedItem: null
  };
  // onSelectedItem = id => {
  //   this.setState({
  //     selectedItem: id
  //   });
  // };
  render() {
    const planetList = (
      <ItemList
        getData={this.swapiService.getAllPlanet}
        renderItem={item => `${item.name}`}
      />
    );
    return (
      <div>
        <Header />
        {/* <RandomPlanet /> */}
        <Row left={planetList} right={<PlanetDetails />} />
        <Row left="{planetList}" right="{<PlanetDetails />}" />
        {/* <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              getData={this.swapiService.getAllPlanet}
              renderItem={item => `${item.name}`}
            />
          </div>
          <div className="col-md-6">
            <PlanetDetails selectedItem={this.state.selectedItem} />
          </div>
        </div> */}
      </div>
    );
  }
}
