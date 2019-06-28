import React from 'react';

import styles from './styles.module.scss';

const Square = ({value}) => (
  <button type="button" className={styles.square}>
    {value}
  </button>
);

export default Square;
