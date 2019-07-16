export const actions = {
  ADD_GAME: '@@GAME/ADD_GAME',
  REMOVE_GAME: '@@GAME/REMOVE_GAME'
};

const actionsCreators = {
  addGame: (move) => ({
    type: actions.ADD_GAME,
    payload: move
  }),
  removeGame: (move) => ({
    type: actions.REMOVE_GAME,
    payload: move
  })
};

export default actionsCreators;
