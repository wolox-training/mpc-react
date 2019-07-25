import MatchesService from '../../services/MatchesService';

export const actions = {
  GET_MATCHES: '@@MATCHES/GET_MATCHES',
  GET_MATCHES_SUCCESS: '@@MATCHES/GET_MATCHES_SUCCESS',
  GET_MATCHES_FAILURE: '@@MATCHES/GET_MATCHES_FAILURE'
};

const actionsMatches = {
  getMatches: data => async dispatch => {
    dispatch({
      type: actions.GET_MATCHES,
      payload: data
    });
    const response = await MatchesService.getMatch();
    if (response.ok) {
      dispatch({
        type: actions.GET_MATCHES_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_MATCHES_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionsMatches;
