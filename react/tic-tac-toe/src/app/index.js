import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Topbar from './components/Topbar';
import Game from './screens/Game';

import '../scss/application.scss';

function App({ isLogged }) {
  return (
    <Fragment>
      {isLogged ? <Topbar /> : console.log('Usuario no logueado')}
      <Game />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  isLogged: state.login.isLogged
});

export default connect(mapStateToProps)(App);
