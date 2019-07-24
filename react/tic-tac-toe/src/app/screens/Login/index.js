import React, { Component } from 'react';

import FormLogin from './components/FormLogin';

class Login extends Component {
  handleSubmit = values => {
    window.alert(JSON.stringify(values, null, 4));
  };

  render() {
    return <FormLogin onSubmit={this.handleSubmit} />;
  }
}

export default Login;
