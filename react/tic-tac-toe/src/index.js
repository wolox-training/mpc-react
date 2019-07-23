import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './app';
import Login from './app/screens/Login';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';
import store from './redux/store';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </AppContainer>
    </Provider>,
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
