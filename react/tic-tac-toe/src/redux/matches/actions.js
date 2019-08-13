import { createTypes, completeTypes } from 'redux-recompose';

import MatchesService from '../../services/MatchesService';

export const actions = createTypes(completeTypes(['GET_MATCHES'], []), '@@MATCHES');

export const targets = {
  matches: 'matches'
};

const actionsMatches = {
  getMatches: () => ({
    type: actions.GET_MATCHES,
    service: MatchesService.getMatch,
    target: targets.matches
  })
};

export default actionsMatches;
