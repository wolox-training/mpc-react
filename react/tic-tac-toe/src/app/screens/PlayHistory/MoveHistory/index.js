import React, { Component } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';

import withSpinner from '../WithSpinner';
import actionsMatches from '../../../../redux/matches/actions';
import { getWinnerClass } from '../../Game/utils';
import Board from '../../Game/components/Board';

import styles from './styles.module.scss';
import { PLAYER_ONE, PLAYER_TWO } from './constants';

class MoveHistory extends Component {
  state = {
    history: [],
    alert: '',
    visible: false
  };

  componentDidMount() {
    this.props.getMatches();
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  handleClick = id => {
    const { matches } = this.props;
    const history = matches[id].history;
    if (history) {
      this.setState({
        history: matches[id].history,
        alert: undefined,
        visible: false
      });
    } else {
      this.setState({
        alert: 'No hay historial de jugadas'
      });
    }

    this.openModal();
  };

  render() {
    const { matches } = this.props;
    return (
      <div className={styles.matchesContainer}>
        <ol>
          <h1>Match History</h1>
          {matches.map((item, i) => (
            <li key={item.id} onClick={() => this.handleClick(i)}>
              <span className={getWinnerClass(item.winner === PLAYER_ONE)}>{item.player_one}</span> -{' '}
              <span className={getWinnerClass(item.winner === PLAYER_TWO)}>{item.player_two}</span>
              {this.state.visible && !this.state.history ? (
                <Modal
                  visible={this.state.visible}
                  width="300"
                  height="200"
                  effect="fadeInUp"
                  onClickAway={() => this.closeModal()}
                >
                  <div className={styles.text}>
                    <p className={styles.alert}>{this.state.alert}</p>
                    <a
                      href="http://localhost:3001/play-history"
                      onClick={() => this.closeModal()}
                      className={styles.close}
                    >
                      Close
                    </a>
                  </div>
                </Modal>
              ) : (
                ''
              )}
            </li>
          ))}
        </ol>

        <div className={styles.moveContainer}>
          <h1>Movement History</h1>
          <Board squares={this.state.history} />
        </div>
      </div>
    );
  }
}

MoveHistory.propTypes = {
  getMatches: func.isRequired,
  alert: string,
  history: arrayOf(string),
  loading: bool,
  matches: arrayOf(shape({ PLAYER_ONE: string, PLAYER_TWO: string })),
  visible: bool
};

const mapStateToProps = state => ({
  matches: state.matches.matches,
  loading: state.matches.matchesLoading
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(actionsMatches.getMatches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSpinner(props => props.loading && !props.matches)(MoveHistory));
