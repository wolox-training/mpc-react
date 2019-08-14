import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { element, bool, string, func } from 'prop-types';
import { push } from 'connected-react-router';

import { LOGIN, GAME } from '../../../constants/routes';

class AuthRoute extends Component {
  componentDidMount() {
    if (this.props.isPrivate) {
      if (!this.props.isLogged) {
        this.props.redirectLogin();
      }
    } else if (this.props.isLogged) {
      this.props.redirectGame();
    }
  }

  render() {
    const { path, component } = this.props;
    return <Route path={path} component={component} />;
  }
}

AuthRoute.propTypes = {
  component: element,
  isLogged: bool,
  isPrivate: bool,
  path: string,
  redirectGame: func,
  redirectLogin: func
};

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged
});

const mapDispatchToProps = dispatch => ({
  redirectLogin: () => {
    dispatch(push(LOGIN));
  },
  redirectGame: () => {
    dispatch(push(GAME));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRoute);
