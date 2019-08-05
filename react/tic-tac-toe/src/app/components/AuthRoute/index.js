import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { LOGIN } from '../../../constants/routes';

class AuthRoute extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log('hola', token);
    if (this.props.isPrivate && !token) {
      this.props.pushLogin();
      console.log('isPrivate');
    }
  }

  render() {
    return <Route path={this.props.path} component={this.props.component} />;
  }
}

const mapDispatchToProps = dispatch => ({
  pushLogin: () => {
    dispatch(push(LOGIN));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AuthRoute);
