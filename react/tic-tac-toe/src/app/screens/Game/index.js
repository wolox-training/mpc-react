import React, { Component } from 'react';

import styles from './styles.module.scss';
import Board, { calculateWinner } from './components/Board';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
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
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const winner = current && calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #  ${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

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
          {/* <div>{status}</div> */}
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

export default Game;
