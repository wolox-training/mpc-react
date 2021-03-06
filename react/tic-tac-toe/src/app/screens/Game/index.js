import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool, string, number, arrayOf } from 'prop-types';

import actionsGame from '../../../redux/game/actions';

import { calculateWinner, getWinner } from './utils';
import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends Component {
  handleClick = i => {
    const { history, winner, xIsNext, addMove, setWinner } = this.props;
    const current = history[history.length - 1];
    const squares = [...current];

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
    const { winner, xIsNext, stepNumber, removeMove } = this.props;
    const history = this.props.history.slice(0, stepNumber + 1);
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
      </div>
    );
  }
}

Game.propTypes = {
  addMove: func,
  history: arrayOf(arrayOf(string)),
  removeMove: func,
  setWinner: func,
  stepNumber: number,
  winner: string,
  xIsNext: bool
};

const mapStateToProps = state => ({
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext,
  winner: state.game.winner
});

const mapDispatchToProps = dispatch => ({
  addMove: i => dispatch(actionsGame.addMove(i)),
  removeMove: step => dispatch(actionsGame.removeMove(step)),
  setWinner: winner => dispatch(actionsGame.setWinner(winner))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
