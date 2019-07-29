import React from 'react';

import styles from './styles.module.scss';

export const customInput = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} className={styles.formInput} />
    {touched &&
      ((error && <span className={styles.formError}>{error}</span>) ||
        (warning && <span className={styles.formError}>{warning}</span>))}
  </div>
);
