import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

function Topbar({ handleClick }) {
  return (
    <nav className={styles.topbar}>
      <ul>
        <Link to={{ pathname: '/point-history' }} className={styles.topbarLink}>Point History</Link>
        <li>
          <button type="button" onClick={handleClick}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
