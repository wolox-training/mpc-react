import React from 'react';

function withSpinner(Component) {
  return class extends Component {
    state = {
      loading: true
    };

    componentDidMount() {
      this.props.getMatches();
    }

    render() {
      return <Component />;
    }
  };
}

export default withSpinner;
