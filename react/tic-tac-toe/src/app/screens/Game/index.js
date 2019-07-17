import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionsCreators from '../../../redux/game/actions';

import { calculateWinner, getWinner } from './utils';
import styles from './styles.module.scss';
import Board from './components/Board';
import Matches from './components/Matches';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true,
    winner: null
  };

  handleClick = i => {
    const { history, winner, xIsNext } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';

    const winnerCalculate = calculateWinner(squares);

    this.setState({
      winner: winnerCalculate,
      history: history.concat([
        {
          squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !xIsNext
    });
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const { history, winner, xIsNext } = this.state;
    const status = getWinner(winner, xIsNext);
    const current = history[this.state.stepNumber];

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #  ${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board status={status} squares={current.squares} handleClick={this.handleClick} />
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addMove: i => dispatch(actionsCreators.addMove(i)),
  removeMove: step => dispatch(actionsCreators.removeMove(step)),
  setWinner: winner => dispatch(actionsCreators.setWinner(winner))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
