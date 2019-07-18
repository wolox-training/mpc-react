import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionsCreators from '../../../redux/game/actions';

import { calculateWinner, getWinner } from './utils';
import styles from './styles.module.scss';
import Board from './components/Board';
import Matches from './components/Matches';

class Game extends Component {
  handleClick = i => {
    const { history, winner, xIsNext, addMove, setWinner } = this.props;
    const current = history[history.length - 1];
    const squares = current.slice();

    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';

    const winnerCalculate = calculateWinner(squares);
    addMove(squares);
    if (winnerCalculate) {
      setWinner(winnerCalculate);
    }
  };

  render() {
    const { history, winner, xIsNext, stepNumber, removeMove } = this.props;
    const status = getWinner(winner, xIsNext);
    const current = history[stepNumber];

    const moves = history.map((_, move) => {
      const desc = move ? `Go to move #  ${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button type="button" onClick={() => removeMove(move)}>
            {desc}
          </button>
        </li>
      );
    });

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board status={status} squares={current} handleClick={this.handleClick} />
        </div>
        <div className={styles.gameInfo}>
          <ol>{moves}</ol>
        </div>
        <div className={styles.gameLoader}>
          <Matches />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext,
  winner: state.winner
});

const mapDispatchToProps = dispatch => ({
  addMove: i => dispatch(actionsCreators.addMove(i)),
  removeMove: step => dispatch(actionsCreators.removeMove(step)),
  setWinner: winner => dispatch(actionsCreators.setWinner(winner))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
