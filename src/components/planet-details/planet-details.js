import React, { Component } from "react";

import Error from "../error";
import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import "./planet-details.css";

export default class PlanetDetails extends Component {
  state = {
    data: {},
    loading: false,
    error: false
  };
  swapiService = new SwapiService();

  onError = () => {
    this.setState({
      error: true
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.setState({ loading: true });
      this.swapiService
        .getPlanet(this.props.selectedItem)
        .then(data => {
          this.setState({ data, loading: false });
        })
        .catch(this.onError);
    }
  }

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  RenderCard({ id, name, population, rotationPeriod, diameter }) {
    if (this.state.data.id) {
      return (
        <React.Fragment>
          <div className="planet-details card">
            <img
              className="planet-image"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            />
            <div className="card-body">
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Population</span>
                  <span>{population}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Rotation period</span>
                  <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Diameter</span>
                  <span>{diameter}</span>
                </li>
              </ul>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return null;
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state.data;
    const { loading, error } = this.state;
    const spinner = loading & !error ? <Spinner /> : null;
    const errors = error ? <Error /> : null;

    const content =
      !loading & !error
        ? this.RenderCard({ id, name, population, rotationPeriod, diameter })
        : null;
    return (
      <div>
        {errors}
        {spinner}
        {content}
      </div>
    );
  }
}
