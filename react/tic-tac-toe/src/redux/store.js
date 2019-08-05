import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import game from './game/reducer';
import matches from './matches/reducer';
import auth from './auth/reducer';

export const history = createBrowserHistory();

const reducer = combineReducers({
  router: connectRouter(history),
  game,
  matches,
  auth,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

export default createStore(reducer, composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)));
