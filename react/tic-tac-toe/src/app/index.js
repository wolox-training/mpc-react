import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import actionsCreators from '../redux/auth/actions';

import Game from './screens/Game';

class App extends Component {
  componentDidMount() {
    this.props.authInit();
  }

  render() {
    return <Game />;
  }
}

App.propTypes = {
  authInit: func
};

const mapDispatchToProps = dispatch => ({
  authInit: () => dispatch(actionsCreators.authInit())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
