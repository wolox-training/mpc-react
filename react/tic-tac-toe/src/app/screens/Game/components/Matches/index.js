import React, { Component } from 'react';

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
    return (
      <div>
        <h1>Match History</h1>
        {this.state.loading ? (
          <Spinner name="three-bounce" color="#00ADEE" />
        ) : (
          <ol>
            {this.state.data.map(item => (
              <li key={item.id}>
                <span className={getWinnerClass(item.winner === 'player_one')}>{item.player_one}</span> -{' '}
                <span className={getWinnerClass(item.winner === 'player_two')}>{item.player_two}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  }
}

export default Matches;
