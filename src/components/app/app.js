import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";

import "./app.css";

export default class App extends Component {
  state = {
    selectedItem: null
  };
  onSelectedItem = id => {
    this.setState({
      selectedItem: id
    });
  };
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onSelectedItem={this.onSelectedItem} />
          </div>
          <div className="col-md-6">
            <PlanetDetails selectedItem={this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}
