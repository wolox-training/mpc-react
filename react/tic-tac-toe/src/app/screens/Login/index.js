import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Login extends Component {
  render() {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div>
          <label>Email</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Login = reduxForm({
  form: 'login'
})(Login);

export default Login;
