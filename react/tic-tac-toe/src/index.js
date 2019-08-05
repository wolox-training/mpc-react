import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import App from './app';
import Login from './app/screens/Login';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';
import store, { history } from './redux/store';
import { LOGIN, GAME } from './constants/routes';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <AuthRoute path={LOGIN} component={Login} />
            <AuthRoute path={GAME} component={App} isPrivate />
            <AuthRoute path={POINT_HISTORY} component={PointHistory} isPrivate />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render once
render(App);

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
