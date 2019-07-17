import { actions } from './actions';

const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true,
  winner: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_MOVE:
      return {
        ...state,
        i: action.payload
      };
    case actions.REMOVE_MOVE:
      return {
        ...state,
        step: action.payload
      };
    case actions.SET_WINNER:
      return {
        ...state,
        winner: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
