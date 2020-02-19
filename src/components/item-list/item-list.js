import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import "./item-list.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    items: []
  };
  componentDidMount() {
    this.swapiService.getAllPlanet().then(data => {
      this.setState({ items: data });
    });
  }

  render() {
    const { items } = this.state;
    const { onSelectedItem } = this.props;
    return (
      <ul className="item-list list-group">
        {items.map(item => (
          <li
            className="list-group-item"
            key={item.id}
            onClick={() => onSelectedItem(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}
