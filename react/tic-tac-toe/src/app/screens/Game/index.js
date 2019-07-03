import React, { Component } from 'react';

import { calculateWinner } from '../utils';

import styles from './styles.module.scss';
import Board from './components/Board';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    xIsNext: true
  };

  handleClick = i => {
    const { history } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([
        {
          squares
        }
      ]),
      xIsNext: !this.state.xIsNext
    });
  };

  render() {
    const { history } = this.state;
    const current = history[history.length - 1];
    const winner = current && calculateWinner(current.squares);

    let status;
    if (winner) {
      status = `Winner:  ${winner}`;
    } else {
      status = `Next player:  ${this.state.xIsNext ? 'X' : 'O'}`;
    }

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
