import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { LOGIN } from '../../../constants/routes';
import { TOKEN } from '../../../constants/auth';

class AuthRoute extends Component {
  componentDidMount() {
    if (this.props.isPrivate) {
      const token = localStorage.getItem(TOKEN);
      if (!token) {
        this.props.redirectLogin();
      }
    }
  }

  render() {
    const { path, component } = this.props;
    return <Route path={path} component={component} />;
  }
}

AuthRoute.propTypes = {
  component: PropTypes.element,
  isPrivate: PropTypes.bool,
  path: PropTypes.string,
  redirectLogin: PropTypes.func,
  token: PropTypes.string
};

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  redirectLogin: () => {
    dispatch(push(LOGIN));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
