import React, { Component, Fragment } from 'react';

import Game from './screens/Game';
import Login from './screens/Login';

import '../scss/application.scss';

class App extends Component {
  handleSubmit = values => {
    window.alert(JSON.stringify(value, null, 4));
  };

  render() {
    return (
      <Fragment>
        <Login onSubmit={this.handleSubmit} />
        <Game />
      </Fragment>
    );
  }
}

export default App;
