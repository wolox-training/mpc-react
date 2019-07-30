import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';

import CustomInput from '../Fields';
import { required, email, minLength } from '../../validation';

import styles from './styles.module.scss';

function FormLogin({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit} className={styles.formLogin}>
      <Field name="email" component={CustomInput} type="text" label="Email" validate={[required, email]} />
      <Field
        name="password"
        component={CustomInput}
        type="password"
        label="Password"
        validate={[required, minLength]}
      />
      <button type="submit" className={styles.formButton}>
        Login
      </button>
    </Form>
  );
}

export default reduxForm({
  form: 'login'
})(FormLogin);
