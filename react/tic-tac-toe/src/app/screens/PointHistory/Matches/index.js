import React, { Component } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import actionsMatches from '../../../../redux/matches/actions';
import { getWinnerClass } from '../../Game/utils';

import styles from './styles.module.scss';
import { PLAYER_ONE, PLAYER_TWO } from './constants';

class Matches extends Component {
  componentDidMount() {
    this.props.getMatches(this.props.data);
  }

  handleClick = () => {
    console.log('soy un li');
  }

  render() {
    const { loading, data } = this.props;
    return (
      <div className={styles.matchesContainer}>
        <h1>Match History</h1>
        {loading ? (
          <Spinner name="three-bounce" color="#00ADEE" />
        ) : (
          <ol>
            {data.map(item => (
              <li key={item.id} onClick={this.handleClick}>
                <span className={getWinnerClass(item.winner === PLAYER_ONE)}>{item.player_one}</span> -{' '}
                <span className={getWinnerClass(item.winner === PLAYER_TWO)}>{item.player_two}</span>
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
  data: arrayOf(shape({ PLAYER_ONE: string, PLAYER_TWO: string })),
  loading: bool
};

const mapStateToProps = state => ({
  data: state.matches.data,
  loading: state.matches.loading
});

const mapDispatchToProps = dispatch => ({
  getMatches: data => dispatch(actionsMatches.getMatches(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
