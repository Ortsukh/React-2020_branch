import React, { Component } from "react";
import "./item-details.css";

class ItemDetails extends Component {
  RenderCard() {
    const { item, getImageUrl, children } = this.props;
    if (!item) {
      return <span>Select a item from a list</span>;
    }
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
export default ItemDetails;
