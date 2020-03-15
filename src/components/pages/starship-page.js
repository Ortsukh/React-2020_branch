import React, { Component } from "react";

import { StarshipList, StarshipDetails } from "../sw-components";
import Row from "../row";
import SwapiService from "../../services/swapi-service";

class StarshipPage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedStarship: null
  };
  onStarShipSelected = selectedStarship => {
    this.setState({
      selectedStarship
    });
  };
  render() {
    const { selectedStarship } = this.state;
    const starshipList = (
      <StarshipList onItemSelected={this.onStarShipSelected} />
    );

    const starshipDetails = <StarshipDetails itemId={selectedStarship} />;
    return <Row left={starshipList} right={starshipDetails} />;
  }
}

export { StarshipPage };
