import React, { Component } from 'react';

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
    xIsNext: true,
    winner: null,
    stepNumber: 0
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
      xIsNext: !xIsNext,
      stepNumber: history.length
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

export default Game;
