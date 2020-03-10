import React from "react";
import ItemDetails from "../item-details";
import Record from "../records";
import { SwapiServiceConsumer } from "../../context";
import ErrorBoundry from "../error-boundry";
import { withItemDetails } from "../../hocs";

const PersonDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getPerson, getPersonImage }) => {
      return (
        <ErrorBoundry>
          <HockItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
          >
            <Record field="gender" label="Gender"></Record>
            <Record field="eyeColor" label="Eye color"></Record>
          </HockItemDetails>
        </ErrorBoundry>
      );
    }}
  </SwapiServiceConsumer>
);

const PlanetDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getPlanet, getPlanetImage }) => {
      return (
        <ErrorBoundry>
          <HockItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
          >
            <Record label="Name" field="name" />
            <Record label="Population" field="population" />
            <Record label="Rotation period" field="rotation period" />
            <Record label="Diameter" field="diameter" />
          </HockItemDetails>
        </ErrorBoundry>
      );
    }}
  </SwapiServiceConsumer>
);

const StarshipDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {({ getStarship, getStarshipImage }) => {
      return (
        <ErrorBoundry>
          <HockItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}
          >
            <Record field="model" label="Model"></Record>
          </HockItemDetails>
        </ErrorBoundry>
      );
    }}
  </SwapiServiceConsumer>
);

const HockItemDetails = withItemDetails(ItemDetails);

export { PersonDetails, PlanetDetails, StarshipDetails };
