import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';

const indexes = [0, 1, 2];

class Board extends Component {
  renderSquare = (index) => <Square value={this.props.squares[index]} onClick={() => this.props.handleClick(index)} />;

  renderRow = (rowIndex) => <div className={styles.boardRow}>{indexes.map(i => this.renderSquare(rowIndex*3 + i))}</div>;

  render() {
    const { status } = this.props;
    return (
      <Fragment>
        <div className={styles.status}>{status}</div>
        {indexes.map(i => this.renderRow(i))}
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
