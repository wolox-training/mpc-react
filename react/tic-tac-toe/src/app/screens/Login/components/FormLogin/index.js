import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { validate } from '../../validation';

import styles from './styles.module.scss';

class FormLogin extends Component {
  render() {
    const { handleSubmit, meta } = this.props;
    return (
      <form onSubmit={handleSubmit} className={styles.formLogin}>
        <div>
          <label className={styles.formLabel}>Email</label>
          <Field
            name="name"
            component="input"
            type="text"
            className={styles.formField}
          />
          {meta.error && meta.(
            <div styles={{ color: 'red' }}>{meta.error}</div>
          )}
        </div>
        <div>
          <label className={styles.formLabel}>Password</label>
          <Field
            name="password"
            component="input"
            type="text"
            className={styles.formField}
          />
        </div>
        <button type="submit" className={styles.formButton}>
          Submit
        </button>
      </form>
    );
  }
}

FormLogin = reduxForm({
  form: 'login',
  validate
})(FormLogin);

export default FormLogin;
