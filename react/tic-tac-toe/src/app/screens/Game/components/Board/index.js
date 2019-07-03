import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {
  renderSquare = (index, value) => <Square value={value} onClick={() => this.props.handleClick(index)} />;

  render() {
    const { squares, status } = this.props;
    const { boardRow } = styles;
    return (
      <Fragment>
        <div className={styles.status}>{status}</div>
        <div className={boardRow}>
          {this.renderSquare(0, squares[0])}
          {this.renderSquare(1, squares[1])}
          {this.renderSquare(2, squares[2])}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3, squares[3])}
          {this.renderSquare(4, squares[4])}
          {this.renderSquare(5, squares[5])}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6, squares[6])}
          {this.renderSquare(7, squares[7])}
          {this.renderSquare(8, squares[8])}
        </div>
      </Fragment>
    );
  }
}

Board.propTypes = {
  handleClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired
};

export default Board;
