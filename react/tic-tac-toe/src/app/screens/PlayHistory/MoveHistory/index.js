import React, { Component } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import actionsMatches from '../../../../redux/matches/actions';
import { getWinnerClass } from '../../Game/utils';
import Board from '../../Game/components/Board';

import styles from './styles.module.scss';
import { PLAYER_ONE, PLAYER_TWO } from './constants';

class MoveHistory extends Component {
  state = {
    history: []
  };

  componentDidMount() {
    this.props.getMatches(this.props.data);
  }

  handleClick = id => {
    const { data } = this.props;
    this.setState({
      history: data[id].history
    });
  };

  render() {
    const { loading, data } = this.props;
    return (
      <div className={styles.matchesContainer}>
        {loading ? (
          <Spinner name="three-bounce" color="#00ADEE" />
        ) : (
          <ol>
            <h1>Match History</h1>
            {data.map((item, i) => (
              <li key={item.id} onClick={ () => this.handleClick(i)}>
                <span className={getWinnerClass(item.winner === PLAYER_ONE)}>{item.player_one}</span> -{' '}
                <span className={getWinnerClass(item.winner === PLAYER_TWO)}>{item.player_two}</span>
              </li>
            ))}
          </ol>
        )}
        <div className={styles.moveContainer}>
          <h1>Movement History</h1>
          <Board squares={this.state.history} />
        </div>
      </div>
    );
  }
}

MoveHistory.propTypes = {
  getMatches: func.isRequired,
  data: arrayOf(shape({ PLAYER_ONE: string, PLAYER_TWO: string })),
  history: arrayOf(string),
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
)(MoveHistory);
