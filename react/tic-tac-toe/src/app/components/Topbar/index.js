import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import faSignOutAlt from '../../assets/sign-out-alt-solid.svg';
import actionsCreators from '../../../redux/auth/actions';
import { POINT_HISTORY } from '../../../constants/routes';

import styles from './styles.module.scss';

class Topbar extends Component {
  handleClick = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { isLogged, email } = this.props;
    return (
      <nav className={styles.topbar}>
        <p className={styles.topbarName}>TIC TAC TOE</p>
        {isLogged ? (
          <ul>
            <li>
              <p className={styles.topbarItem}>{email}</p>
            </li>
            <li>
              <Link to={{ pathname: POINT_HISTORY }} className={styles.topbarItem}>
                Point History
              </Link>
            </li>
            <li>
              <button type="button" onClick={this.handleClick} className={styles.topbarItem}>
                <img src={faSignOutAlt} alt="Logout" className={styles.topbarIcon} />
              </button>
            </li>
          </ul>
        ) :
          ''
        }
      </nav>
    );
  }
}

Topbar.propTypes = {
  email: PropTypes.string,
  isLogged: PropTypes.bool,
  logout: PropTypes.func
};

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
  email: state.auth.email
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionsCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar);
