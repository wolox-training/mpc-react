import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { LOGIN } from '../../../constants/routes';
import { TOKEN } from '../../../constants/auth';

class AuthRoute extends Component {
  componentDidMount() {
    const token = localStorage.getItem(TOKEN);
    if (this.isPrivate && !token) {
      this.pushLogin();
    }
  }

  render() {
    const { path, component } = this.props;
    return <Route path={path} component={component} />;
  }
}

AuthRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string
};

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
