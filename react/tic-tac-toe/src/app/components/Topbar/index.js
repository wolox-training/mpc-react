import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.scss';

function Topbar() {
  return (
    <nav className={styles.topbar}>
      <li>
        <a href="http://localhost:3001/login">Logout</a>
        <FontAwesomeIcon icon="sign-out-alt" />
      </li>
    </nav>
  );
}

export default Topbar;
