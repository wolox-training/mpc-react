import React, { Component } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';

import actionsMatches from '../../../../redux/matches/actions';
import { getWinnerClass } from '../../Game/utils';
import Board from '../../Game/components/Board';
import { PLAY_HISTORY } from '../../../../constants/routes';

import styles from './styles.module.scss';
import { PLAYER_ONE, PLAYER_TWO } from './constants';

class MoveHistory extends Component {
  state = {
    history: [],
    alert: '',
    visible: false
  };

  componentDidMount() {
    this.props.getMatches(this.props.matches);
  }

  handleClickModal() {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  }

  handleClick = id => {
    const { matches } = this.props;
    const history = matches[id].history;
    if (history) {
      this.setState({
        history: matches[id].history,
        alert: '',
        visible: false
      });
    } else {
      this.setState({
        alert: 'No hay historial de jugadas'
      });
    }

    this.handleClickModal();
  };

  render() {
    const { loading, matches } = this.props;
    return (
      <div className={styles.matchesContainer}>
        {loading ? (
          <Spinner name="three-bounce" className={styles.spinner} />
        ) : (
          <ol>
            <h1>Match History</h1>
            {matches &&
              matches.map((item, i) => (
                <li key={item.id} onClick={() => this.handleClick(i)}>
                  <span className={getWinnerClass(item.winner === PLAYER_ONE)}>{item.player_one}</span> -{' '}
                  <span className={getWinnerClass(item.winner === PLAYER_TWO)}>{item.player_two}</span>
                  {this.state.visible && !this.state.history && (
                    <Modal
                      visible={this.state.visible}
                      width="300"
                      height="200"
                      effect="fadeInUp"
                      onClickAway={this.handleClickModal}
                    >
                      <div className={styles.text}>
                        <p className={styles.alert}>{this.state.alert}</p>
                        <Link to={{ pathname: PLAY_HISTORY }} className={styles.close}>
                          close
                        </Link>
                      </div>
                    </Modal>
                  )}
                </li>
              ))}
          </ol>
        )}
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
  matches: state.matches.data,
  loading: state.matches.matchesLoading
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(actionsMatches.getMatches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveHistory);
