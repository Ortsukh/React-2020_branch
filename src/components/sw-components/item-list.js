import ItemList from "../item-list";
import { withData, withChildrenFunction } from "../../hocs";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getAllPlanet, getAllStarship } = new SwapiService();
const renderName = item => `${item.name}`;
const PersonList = withData(
  withChildrenFunction(ItemList, renderName),
  getAllPeople
);
const PlanetList = withData(
  withChildrenFunction(ItemList, renderName),
  getAllPlanet
);
const StarshipList = withData(
  withChildrenFunction(ItemList, renderName),
  getAllStarship
);

export { PersonList, PlanetList, StarshipList };
