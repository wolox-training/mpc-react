import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { AppContainer } from 'react-hot-loader';

import store, { history } from '../redux/store';
import { LOGIN, GAME, PLAY_HISTORY } from '../constants/routes';

import AuthRoute from './components/AuthRoute';
import Topbar from './components/Topbar';
import Login from './screens/Login';
import PlayHistory from './screens/PlayHistory';
import Game from './screens/Game';

function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Fragment>
            <Topbar />
            <Switch>
              <AuthRoute path={LOGIN} component={Login} />
              <AuthRoute path={GAME} component={Game} isPrivate />
              <AuthRoute path={PLAY_HISTORY} component={PlayHistory} isPrivate />
            </Switch>
          </Fragment>
        </ConnectedRouter>
      </Provider>
    </AppContainer>
  );
}

export default App;
