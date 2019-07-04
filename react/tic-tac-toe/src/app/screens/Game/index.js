import React, { Component } from 'react';

import { calculateWinner, getWinner } from '../utils';

import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
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
      xIsNext: !xIsNext
    });
  };

  render() {
    const { history, winner, xIsNext } = this.state;
    const current = history[history.length - 1];

    const status = getWinner(winner, xIsNext);

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board status={status} squares={current.squares} handleClick={this.handleClick} />
        </div>
        <div className={styles.gameInfo}>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
