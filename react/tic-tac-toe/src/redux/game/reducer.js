import { actions } from './actions';

const initialState = {
  history: [Array(9).fill(null)],
  stepNumber: 0,
  xIsNext: true,
  winner: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_MOVE:
      return {
        ...state,
        history: state.history.concat([action.payload]),
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext
      };
    case actions.REMOVE_MOVE:
      return {
        ...state,
        stepNumber: action.payload,
        xIsNext: action.payload % 2 === 0
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
