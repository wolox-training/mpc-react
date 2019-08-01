import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Topbar from './components/Topbar';
import Game from './screens/Game';

import '../scss/application.scss';

library.add(faSignOutAlt);

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
