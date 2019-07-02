import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Square({ value, index, onClick }) {
  return (
    <button type="button" className={styles.square} onClick={() => onClick(index)}>
      {value}
    </button>
  );
}

Square.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Square;
