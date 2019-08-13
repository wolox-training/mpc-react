import Inmutable from 'seamless-immutable';
import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  matches: []
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_MATCHES],
  override: {}
};

export default createReducer(Inmutable(initialState), completeReducer(reducerDescription));
