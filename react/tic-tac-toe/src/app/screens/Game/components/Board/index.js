import React from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';

function Board ({ status, squares, handleClick }) {
  return (
    <div>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        <Square value={squares[0]} index={0} onClick={handleClick} />
        <Square value={squares[1]} index={1} onClick={handleClick} />
        <Square value={squares[2]} index={2} onClick={handleClick} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[3]} index={3} onClick={handleClick} />
        <Square value={squares[4]} index={4} onClick={handleClick} />
        <Square value={squares[5]} index={5} onClick={handleClick} />
      </div>
      <div className={styles.boardRow}>
        <Square value={squares[6]} index={6} onClick={handleClick} />
        <Square value={squares[7]} index={7} onClick={handleClick} />
        <Square value={squares[8]} index={8} onClick={handleClick} />
      </div>
    </div>
  );
}

Board.propTypes = {
  handleClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired
 };

export default Board;

export function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
