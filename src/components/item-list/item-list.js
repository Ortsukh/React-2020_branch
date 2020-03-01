import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import "./item-list.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    planetList: null,
    error: false
  };

  onError = () => {
    this.setState({
      error: true
    });
  };
  componentDidCatch() {
    this.setState({
      error: true
    });
  }
  componentDidMount() {
    // console.log(this.props.getData);
    this.props
      .getData()
      .then(planetList => {
        // console.log(planetList);
        this.setState({ planetList });
      })
      .catch(this.onError);
  }

  renderItems(arr) {
    return arr.map(item => {
      return (
        <li
          className="list-group-item"
          key={item.id}
          onClick={() => this.props.onSelectedItem(item.id)}
        >
          {this.props.renderItem(item)}
        </li>
      );
    });
  }

  render() {
    const { planetList } = this.state;

    if (!planetList) {
      return <Spinner />;
    }
    const items = this.renderItems(planetList);
    // console.log(items);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
