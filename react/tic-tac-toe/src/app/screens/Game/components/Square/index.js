import React from 'react';

import styles from './styles.module.scss';

function Square({ value, index, onClick }) {
  return (
    <button type="button"
      className={styles.square}
      onClick={() => onClick(index)}>
      {value}
    </button>
  );
}

export default Square;
