import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';

import { LOGIN, GAME, POINT_HISTORY } from '../../../constants/routes';
import AuthRoute from '../AuthRoute';
import Topbar from '../Topbar';
import Login from '../../screens/Login';
import PointHistory from '../../screens/PointHistory';
import Game from '../../screens/Game';

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Topbar />
        <Switch>
            <AuthRoute path={LOGIN} component={Login} />
            <AuthRoute path={GAME} component={Game} isPrivate />
            <AuthRoute path={POINT_HISTORY} component={PointHistory} isPrivate />
          </Switch>
      </Fragment>
    );
  }
}

export default Routes;
