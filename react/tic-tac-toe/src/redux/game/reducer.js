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
      return state.merge({
        history: state.history.concat([action.payload]),
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext
      });
    case actions.REMOVE_MOVE:
      return state.merge({
        stepNumber: action.payload,
        xIsNext: action.payload % 2 === 0
      });
    case actions.SET_WINNER:
      return state.merge({
        winner: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
