import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionsLogin from '../../../redux/login/actions';

import FormLogin from './components/FormLogin';

class Login extends Component {
  handleSubmit = values => {
    this.props.login(JSON.stringify(values, null, 4));
  };

  render() {
    return <FormLogin onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => ({
  values: state.login.values
});

const mapDispatchToProps = dispatch => ({
  login: values => dispatch(actionsLogin.login(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
