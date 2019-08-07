import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import MoveHistory from './MoveHistory';

function PlayHistory() {
  return (
    <Fragment>
      <div className={styles.playNamePage}>
        <p>Play History</p>
      </div>
      <div className={styles.playContainer}>
        <MoveHistory />
      </div>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  history: state.matches.data.history
});

export default connect(
  mapStateToProps,
  null
)(PlayHistory);
