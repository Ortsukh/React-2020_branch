import React, { Component } from "react";
import Spinner from "../../src/components/spinner";
import Error from "../../src/components/error";

const withData = (View, getData) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        error: false
      };
    }
    componentDidMount() {
      getData()
        .then(data => {
          this.setState({ data });
        })
        .catch(() => this.setState({ error: true }));
    }
    render() {
      const { data, error } = this.state;
      const errors = error ? <Error /> : null;

      if (!data) {
        return <Spinner />;
      }
      if (!errors) {
        return <View {...this.props} data={data} />;
      }
      return <Error />;
    }
  };
};

const withItemDetails = View => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        item: null,
        loading: false,
        error: false
      };
    }
    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.itemId !== this.props.itemId) {
        this.updateItem();
      }
    }

    updateItem() {
      const { itemId, getData } = this.props;
      if (!itemId) {
        return;
      }
      getData(itemId)
        .then(item => {
          this.setState({ item, loading: false });
        })
        .catch(() => this.setState({ error: true }));
    }
    render() {
      const { item, error, loading } = this.state;
      const errors = error ? <Error /> : null;

      if (loading & !error) {
        return <Spinner />;
      }
      if (!errors) {
        return <View {...this.props} item={item} />;
      }
      return <Error />;
    }
  };
};

const withRandomPlanet = View => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        item: null,
        loading: true,
        error: false
      };
    }

    componentDidMount() {
      this.interval = setInterval(this.updatePlanet, 2000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
    componentDidCatch() {
      this.setState({
        error: true
      });
    }
    updatePlanet = () => {
      const { getData } = this.props;
      const id = Math.floor(Math.random() * 20 + 3);

      getData(id)
        .then(item => {
          this.setState({ item, loading: false });
        })
        .catch(() => this.setState({ error: true }));
    };
    render() {
      const { item, error, loading } = this.state;
      const errors = error ? <Error /> : null;

      if (loading & !error) {
        return <Spinner />;
      }
      if (!errors) {
        return <View {...this.props} item={item} />;
      }
      return <Error />;
    }
  };
};
const withChildrenFunction = (Wrapped, fn) => {
  return props => <Wrapped {...props}>{fn}</Wrapped>;
};

export { withData, withChildrenFunction, withItemDetails, withRandomPlanet };
