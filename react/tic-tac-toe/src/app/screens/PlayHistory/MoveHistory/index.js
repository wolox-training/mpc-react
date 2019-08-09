import React, { Component } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import Modal from 'react-awesome-modal';

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
    this.props.getMatches(this.props.data);
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
    const { data } = this.props;
    const history = data[id].history;
    if (history) {
      this.setState({
        history: data[id].history,
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
    const { loading, data } = this.props;
    return (
      <div className={styles.matchesContainer}>
        {loading ? (
          <Spinner name="three-bounce" color="#00ADEE" />
        ) : (
          <ol>
            <h1>Match History</h1>
            {data.map((item, i) => (
              <li key={item.id} onClick={() => this.handleClick(i)}>
                <span className={getWinnerClass(item.winner === PLAYER_ONE)}>{item.player_one}</span> -{' '}
                <span className={getWinnerClass(item.winner === PLAYER_TWO)}>{item.player_two}</span>
                {this.state.visible && !this.state.history? (
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
                ) :
                  ''
                }
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
  data: arrayOf(shape({ PLAYER_ONE: string, PLAYER_TWO: string })),
  history: arrayOf(string),
  loading: bool,
  visible: bool
};

const mapStateToProps = state => ({
  data: state.matches.data,
  loading: state.matches.loading
});

const mapDispatchToProps = dispatch => ({
  getMatches: data => dispatch(actionsMatches.getMatches(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveHistory);
