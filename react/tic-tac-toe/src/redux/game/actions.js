export const actions = {
  ADD_MOVE: '@@GAME/ADD_MOVE',
  REMOVE_MOVE: '@@GAME/REMOVE_MOVE',
  SET_WINNER: '@@GAME/SET_WINNER'
};

const actionsCreators = {
  addMove: i => ({
    type: actions.ADD_GAME,
    payload: i
  }),
  removeMove: step => ({
    type: actions.REMOVE_GAME,
    payload: step
  }),
  setWinner: winner => ({
    type: actions.SET_WINNER,
    payload: winner
  })
};

export default actionsCreators;
