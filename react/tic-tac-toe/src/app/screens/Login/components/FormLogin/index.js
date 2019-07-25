import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';

import { email, minLength } from '../../validation';

import styles from './styles.module.scss';

function FormLogin({ handleSubmit }, meta) {
  return (
    <Form onSubmit={handleSubmit} className={styles.formLogin}>
      <div>
        <label className={styles.formLabel}>Email</label>
        {meta && meta.error && meta.touched(<div styles={{color: 'red'}}>{meta.error}</div>)}
        <Field name="email" component="input" type="text" className={styles.formField} validate={[email]} />
      </div>
      <div>
        <label className={styles.formLabel}>Password</label>
        {meta.error && meta.touched(<div className={styles.error}>{meta.error}</div>)}
        <Field
          name="password"
          component="input"
          type="password"
          className={styles.formField}
          validate={[minLength]}
        />
      </div>
      <button type="submit" className={styles.formButton}>
        Submit
      </button>
    </Form>
  );
}

export default reduxForm({
  form: 'login'
})(FormLogin);
