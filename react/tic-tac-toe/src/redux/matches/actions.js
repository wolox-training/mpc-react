export const actions = {
  GET_MATCHES: '@@MATCHES/GET_MATCHES'
};

const actionsCreators = {
  getMatches: () => ({
    type: actions.GET_MATCHES,
    payload: DATA
  })
};

export default actionsCreators;
