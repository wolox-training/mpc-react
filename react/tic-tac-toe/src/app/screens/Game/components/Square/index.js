import React from 'react';

import styles from './styles.module.scss';

const Square = ({value}) => (
  <button type="button" className={styles.square} onClick={() => { alert('click'); }}>
    {value}
  </button>
);

export default Square;
