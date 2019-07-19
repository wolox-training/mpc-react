import { actions } from './actions';

const initialState = {
  email: null,
  token: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOG_IN: {
      const { email, token } = action.payload;
      return {
        ...state,
        email,
        token
      };
    }

    default:
      return state;
  }
}

export default reducer;
