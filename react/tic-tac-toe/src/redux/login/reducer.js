import Inmutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  values: {},
  isLoading: false,
  error: null
};

function reducer(state = Inmutable(initialState), action) {
  switch (action.type) {
    case actions.LOGIN:
      return state.merge({
        values: action.payload
      });
    case actions.LOGIN_SUCCESS:
      return state.merge({
        values: action.payload,
        isLoading: true
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
