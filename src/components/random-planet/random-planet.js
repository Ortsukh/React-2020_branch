import React, { Component } from "react";

import "./random-planet.css";

class RandomPlanet extends Component {
  RenderCard() {
    const { item, getImageUrl, children } = this.props;

    return (
      <div className="planet-details card">
        <img className="planet-image" src={getImageUrl(item)} />
        <div className="card-body">
          <h4>{this.props.item.name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }

  render() {
    const content = this.RenderCard();
    return <div>{content}</div>;
  }
}
export default RandomPlanet;
