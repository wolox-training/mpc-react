import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../redux/auth/actions';
import { LOGIN } from '../../../constants/routes';
import { TOKEN } from '../../../constants/auth';

class AuthRoute extends Component {
  componentDidMount() {
    if (this.props.isPrivate) {
      const token = localStorage.getItem(TOKEN);
      if (!token) {
        this.props.redirectLogin();
      }
      this.props.authInit();
    }
  }

  render() {
    const { path, component } = this.props;
    return <Route path={path} component={component} />;
  }
}

AuthRoute.propTypes = {
  authInit: PropTypes.func,
  component: PropTypes.func,
  isPrivate: PropTypes.bool,
  path: PropTypes.string,
  redirectLogin: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  redirectLogin: () => {
    dispatch(push(LOGIN));
  },

  authInit: () => dispatch(actionsCreators.authInit())
});

export default connect(
  null,
  mapDispatchToProps
)(AuthRoute);
