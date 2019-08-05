import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { LOGIN } from '../../../constants/routes';

class AuthRoute extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (this.isPrivate && !token) {
      this.pushLogin();
      console.log('isPrivate');
    }
  }

  render() {
    return <Route path={this.path} component={this.props.component} />;
  }
}

const mapStateToProps = state => ({
  path: state.path,
  isPrivate: state.isPrivate
});

const mapDispatchToProps = dispatch => ({
  pushLogin: () => {
    dispatch(push(LOGIN));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
