import Inmutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  data: [],
  loading: true,
  error: null
};

function reducer(state = Inmutable(initialState), action) {
  switch (action.type) {
    case actions.GET_MATCHES:
      return state.merge({
        data: action.payload
      });
    case actions.GET_MATCHES_SUCCESS:
      return state.merge({
        data: action.payload,
        loading: false
      });
    case actions.GET_MATCHES_FAILURE:
      return state.merge({
        error: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
