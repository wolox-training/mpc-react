import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import actionsCreators from '../../../redux/auth/actions';
import { LOGIN } from '../../../constants/routes';

class AuthRoute extends Component {
  componentDidMount() {
    this.props.authInit();
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

AuthRoute.propTypes = {
  authInit: func
};

const mapStateToProps = state => ({
  path: state.path,
  isPrivate: state.isPrivate
});

const mapDispatchToProps = dispatch => ({
  pushLogin: () => {
    dispatch(push(LOGIN));
  },

  authInit: () => dispatch(actionsCreators.authInit())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
