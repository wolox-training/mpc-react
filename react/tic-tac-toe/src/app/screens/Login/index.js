import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import actionsLogin from '../../../redux/login/actions';

import FormLogin from './components/FormLogin';

class Login extends Component {
  handleSubmit = values => {
    const { login } = this.props;
    login(JSON.stringify(values, null, 4));
  };

  render() {
    return <FormLogin onSubmit={this.handleSubmit} />;
  }
}

Login.propTypes = {
  login: func
};

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actionsLogin.login(values))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
