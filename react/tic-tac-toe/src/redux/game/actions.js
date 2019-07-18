export const actions = {
  ADD_MOVE: '@@GAME/ADD_MOVE',
  REMOVE_MOVE: '@@GAME/REMOVE_MOVE',
  SET_WINNER: '@@GAME/SET_WINNER'
};

const actionsCreators = {
  addMove: move => ({
    type: actions.ADD_MOVE,
    payload: move
  }),
  removeMove: step => ({
    type: actions.REMOVE_MOVE,
    payload: step
  }),
  setWinner: winner => ({
    type: actions.SET_WINNER,
    payload: winner
  })
};

export default actionsCreators;
