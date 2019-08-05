import Inmutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  values: {},
  isLogged: null,
  error: null,
  token: null,
  email: ''
};

function reducer(state = Inmutable(initialState), action) {
  switch (action.type) {
    case actions.LOGIN:
      return state.merge({
        values: action.payload
      });
    case actions.LOGIN_SUCCESS:
      return state.merge({
        isLogged: true,
        token: action.payload.token,
        email: action.payload.email
      });
    case actions.LOGIN_FAILURE:
      return state.merge({
        error: action.payload
      });
    case actions.LOGOUT:
      return state.merge({
        values: {}
      });
    case actions.LOGOUT_SUCCESS:
      return state.merge({
        isLogged: null,
        values: {},
        token: null
      });
    case actions.LOGOUT_FAILURE:
      return state.merge({
        error: action.payload
      });
    case actions.AUTH_INIT:
      return state.merge({
        isLogged: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
