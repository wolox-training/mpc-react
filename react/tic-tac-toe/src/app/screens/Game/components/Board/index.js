import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';
import { indexes } from './constants';

class Board extends Component {
  renderSquare = index => (
    <Square key={index} value={this.props.squares[index]} index={index} onClick={this.props.handleClick} />
  );

  renderRow = rowIndex => (
    <div key={rowIndex} className={styles.boardRow}>
      {indexes && indexes.map(i => this.renderSquare(rowIndex * 3 + i))}
    </div>
  );

  render() {
    const { status } = this.props;
    return (
      <Fragment>
        <div className={styles.status}>{status}</div>
        {indexes && indexes.map(i => this.renderRow(i))}
      </Fragment>
    );
  }
}

Board.propTypes = {
  handleClick: PropTypes.func.isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string
};

export default Board;
