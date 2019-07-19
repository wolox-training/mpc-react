import React, { Component } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';

import actionsCreators from '../../../../../redux/matches/actions';
import MatchesService from '../../../../../services/MatchesService';

import styles from './styles.module.scss';

const Spinner = require('react-spinkit');

const getWinnerClass = isWinner => (isWinner ? styles.winner : '');

class Matches extends Component {
  componentDidMount() {
    const match = MatchesService.getMatches();
    match.then(result => {
      this.props.getMatches(result.data);
    });
  }

  render() {
    const { loading, data } = this.props;
    return (
      <div>
        <h1>Match History</h1>
        {loading && loading ? (
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
      </div>
    );
  }
}

Matches.propTypes = {
  getMatches: func.isRequired,
  data: arrayOf(shape({ player_one: string, player_two: string })),
  loading: bool
};

const mapStateToProps = state => ({
  data: state.matches.data,
  loading: state.matches.loading
});

const mapDispatchToProps = dispatch => ({
  getMatches: data => dispatch(actionsCreators.getMatches(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
