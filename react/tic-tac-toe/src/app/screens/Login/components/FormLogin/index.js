import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';

import CustomInput from '../Fields';
import { required, email, minLength } from '../../validation';

import styles from './styles.module.scss';
import { password } from './constants';

function FormLogin({ handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit} className={styles.formLogin}>
      <Field name="email" component={CustomInput} type="text" label="Email" validate={[required, email]} />
      <Field
        name={password}
        component={CustomInput}
        type={password}
        label={password.charAt(0).toUpperCase() + password.slice(1)}
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
