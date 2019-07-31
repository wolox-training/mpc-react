import React from 'react';

import styles from './styles.module.scss';

function Topbar() {
  return (
    <nav className={styles.topbar}>
      <ol>Puntuaciones</ol>
      <ol>Logout</ol>
    </nav>
  );
}

export default Topbar;
