import React, { Component } from "react";

import { PlanetList, PlanetDetails } from "../sw-components";
import Row from "../row";
import SwapiService from "../../services/swapi-service";
import { withRouter } from "react-router-dom";

class Planet extends Component {
  // swapiService = new SwapiService();
  // state = {
  //   selectedPlanet: null
  // };

  // onPlanetSelected = selectedPlanet => {
  //   this.setState({
  //     selectedPlanet
  //   });
  // };
  render() {
    const { history, match } = this.props;
    const { id } = match.params;
    const planetList = (
      <PlanetList
        onItemSelected={id => {
          history.push(`/planets/${id}`);
        }}
      />
    );

    const planetDetails = <PlanetDetails itemId={id} />;
    return <Row left={planetList} right={planetDetails} />;
  }
}
const PlanetPage = withRouter(Planet);
export { PlanetPage };
