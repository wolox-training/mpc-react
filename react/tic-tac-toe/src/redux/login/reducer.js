import Inmutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  values: {},
  isLogged: false,
  error: null,
  token: null
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
        token: action.payload.token
      });
    case actions.LOGIN_FAILURE:
      return state.merge({
        error: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
