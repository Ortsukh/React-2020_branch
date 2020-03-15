import React, { Component } from "react";

import { PersonList } from "../sw-components";
import { withRouter } from "react-router-dom";

class People extends Component {
  render() {
    const { history } = this.props;

    return (
      <PersonList
        onItemSelected={id => {
          history.push(`/people/${id}`);
        }}
      />
    );
  }
}
const PeoplePage = withRouter(People);
export { PeoplePage };
