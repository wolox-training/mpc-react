import React, { Fragment } from 'react';

import styles from './styles.module.scss';

function CustomInput({ input, label, type, meta: { touched, error, warning } }) {
  return (
    <Fragment>
      <label>{label}</label>
      <input {...input} type={type} className={styles.formInput} />
      {touched &&
        ((error && <span className={styles.formError}>{error}</span>) ||
          (warning && <span className={styles.formError}>{warning}</span>))}
    </Fragment>
  );
}

export default CustomInput;
