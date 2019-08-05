import React, { Component } from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { func } from 'prop-types';

import actionsCreators from '../redux/auth/actions';

import Game from './screens/Game';

library.add(faSignOutAlt);

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
