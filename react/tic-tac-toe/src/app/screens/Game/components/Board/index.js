import React, { Component } from 'react';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  handleClick = (i) => {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner:  ${winner}`;
    } else {
      status = `Next player:  ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          <Square value={this.state.squares[0]} index={0} onClick={this.handleClick} />
          <Square value={this.state.squares[1]} index={1} onClick={this.handleClick} />
          <Square value={this.state.squares[2]} index={2} onClick={this.handleClick} />
        </div>
        <div className={styles.boardRow}>
          <Square value={this.state.squares[3]} index={3} onClick={this.handleClick} />
          <Square value={this.state.squares[4]} index={4} onClick={this.handleClick} />
          <Square value={this.state.squares[5]} index={5} onClick={this.handleClick} />
        </div>
        <div className={styles.boardRow}>
          <Square value={this.state.squares[6]} index={6} onClick={this.handleClick} />
          <Square value={this.state.squares[7]} index={7} onClick={this.handleClick} />
          <Square value={this.state.squares[8]} index={8} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
