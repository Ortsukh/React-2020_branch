import React from "react";
import RandomPlanet from "../random-planet";
import Record from "../records";
import { SwapiServiceConsumer } from "../../context";
import ErrorBoundry from "../error-boundry";
import { withRandomPlanet } from "../../hocs";
const RandomPlanets = () => (
  <SwapiServiceConsumer>
    {({ getPlanet, getPlanetImage }) => {
      return (
        <ErrorBoundry>
          <HockRandom getData={getPlanet} getImageUrl={getPlanetImage}>
            <Record label="Name" field="name" />
            <Record label="Population" field="population" />
            <Record label="Rotation period" field="rotation period" />
            <Record label="Diameter" field="diameter" />
          </HockRandom>
        </ErrorBoundry>
      );
    }}
  </SwapiServiceConsumer>
);
const HockRandom = withRandomPlanet(RandomPlanet);

export { RandomPlanets };
