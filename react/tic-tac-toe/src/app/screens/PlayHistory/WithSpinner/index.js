import React from 'react';

function withSpinner(Component) {
  return class extends Component {
    render() {
      return <Component {...this.props}  />;
    }
  };
}

export default withSpinner;
