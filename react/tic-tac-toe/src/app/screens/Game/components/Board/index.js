import React, { Component } from 'react';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          <Square value={ this.state.squares[0]} index={0} onClick={this.handleClick} />
          <Square value={ this.state.squares[1]} index={1} onClick={this.handleClick} />
          <Square value={ this.state.squares[2]} index={2} onClick={this.handleClick} />
        </div>
        <div className={styles.boardRow}>
          <Square value={ this.state.squares[3]} index={3} onClick={this.handleClick} />
          <Square value={ this.state.squares[4]} index={4} onClick={this.handleClick} />
          <Square value={ this.state.squares[5]} index={5} onClick={this.handleClick} />
        </div>
        <div className={styles.boardRow}>
          <Square value={ this.state.squares[6]} index={6} onClick={this.handleClick} />
          <Square value={ this.state.squares[7]} index={7} onClick={this.handleClick} />
          <Square value={ this.state.squares[8]} index={8} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Board;
