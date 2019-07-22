import { actions } from './actions';

const initialState = {
  data: [],
  loading: true,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MATCHES:
      return {
        ...state,
        data: action.payload
      };
    case actions.GET_MATCHES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case actions.GET_MATCHES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
