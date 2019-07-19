import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionsCreators from '../../../redux/game/actions';
import MatchesService from '../../../../../services/MatchesService';

import styles from './styles.module.scss';

const Spinner = require('react-spinkit');

const getWinnerClass = isWinner => (isWinner ? styles.winner : '');

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

const mapStateToProps = state => {
  data: state.matches.data,
  loading: state.matches.loading
};

const mapDispatchToProps = dispatch => {
  getMatches: data => dispatch(actionsCreators.getMatches(data))
}

export default connect()(Matches);
