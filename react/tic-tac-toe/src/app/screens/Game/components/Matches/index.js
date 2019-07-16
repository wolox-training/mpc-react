import React, { Component, Fragment } from 'react';

import MatchesService from '../../../../../services/MatchesService';
import { getWinnerClass } from '../../utils';

const Spinner = require('react-spinkit');

class Matches extends Component {
  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    const match = MatchesService.getMatches();
    match.then(result => {
      this.setState({ data: result.data, loading: false });
    });
  }

  render() {
    const { loading, data } = this.state;
    return (
      <Fragment>
        <h1>Match History</h1>
        {loading ? (
          <Spinner name="three-bounce" color="#00ADEE" />
        ) : (
          <ol>
            {data.map(item => (
              <li key={item.id}>
                <span className={getWinnerClass(item.winner === 'player_one')}>{item.player_one}</span> -{' '}
                <span className={getWinnerClass(item.winner === 'player_two')}>{item.player_two}</span>
              </li>
            ))}
          </ol>
        )}
      </Fragment>
    );
  }
}

export default Matches;
