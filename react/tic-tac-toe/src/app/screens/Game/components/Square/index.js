import React, { Component } from 'react';

import styles from './styles.module.scss';


class Square extends Component {

  render() {
    const { value, index, onClick } = this.props;
    return (
      <button type="button"
        className={styles.square}
        onClick={() => onClick(index)}>
        {value}
      </button>
    );
  }
}

export default Square;
