import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import actionsAuth from '../../../redux/auth/actions';

import FormLogin from './components/FormLogin';

class Login extends Component {
  handleSubmit = values => {
    const { login } = this.props;
    login(values);
  };

  render() {
    return <FormLogin onSubmit={this.handleSubmit} />;
  }
}

Login.propTypes = {
  login: func
};

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actionsAuth.login(values))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
