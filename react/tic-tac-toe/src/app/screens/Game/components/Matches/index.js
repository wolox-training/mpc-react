import React, { Component, Fragment } from 'react';
import Spinner from 'react-spinkit';

import MatchesService from '../../../../../services/MatchesService';
import { getWinnerClass } from '../../utils';

import { PLAYER_ONE, PLAYER_TWO } from './constants';

class Matches extends Component {
  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    const match = MatchesService.getMatch();
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
                <span className={getWinnerClass(item.winner === PLAYER_ONE)}>{item.player_one}</span> -{' '}
                <span className={getWinnerClass(item.winner === PLAYER_TWO)}>{item.player_two}</span>
              </li>
            ))}
          </ol>
        )}
      </Fragment>
    );
  }
}

export default Matches;
