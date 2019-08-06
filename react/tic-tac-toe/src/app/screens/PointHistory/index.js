import React, { Fragment } from 'react';

import Matches from './Matches';
import MoveHistory from './MoveHistory';
import styles from './styles.module.scss';

function PointHistory() {
  return (
    <Fragment>
      <div className={styles.pointsNamePage}>
        <p>Point History</p>
      </div>
      <div className={styles.pointsContainer}>
        <Matches />
        <MoveHistory />
      </div>
    </Fragment>
  );
}

export default PointHistory;
