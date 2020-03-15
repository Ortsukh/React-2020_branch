import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { PersonDetails } from "../sw-components";

class Person extends Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    console.log(id);

    return <PersonDetails itemId={id} />;
  }
}
const PersonPage = withRouter(Person);

export { PersonPage };
