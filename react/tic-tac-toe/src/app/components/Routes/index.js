import React, { Component, Fragment } from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import actionsAuth from '../../../redux/auth/actions';
import { history } from '../../../redux/store';
import { LOGIN, GAME, POINT_HISTORY } from '../../../constants/routes';
import AuthRoute from '../AuthRoute';
import Topbar from '../Topbar';
import Login from '../../screens/Login';
import PointHistory from '../../screens/PointHistory';
import Game from '../../screens/Game';

class Routes extends Component {
  componentDidMount() {
    this.props.authInit();
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <Topbar />
          <Switch>
            <AuthRoute path={LOGIN} component={Login} />
            <AuthRoute path={GAME} component={Game} isPrivate />
            <AuthRoute path={POINT_HISTORY} component={PointHistory} isPrivate />
          </Switch>
        </Fragment>
      </ConnectedRouter>
    );
  }
}

Routes.propTypes = {
  authInit: func
};

const mapDispatchToProps = dispatch => ({
  authInit: () => dispatch(actionsAuth.authInit())
});

export default connect(
  null,
  mapDispatchToProps
)(Routes);
