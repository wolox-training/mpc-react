import React, { Component, Fragment } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import actionsCreators from '../../../../../redux/matches/actions';
import { getWinnerClass } from '../../utils';

class Matches extends Component {
  componentDidMount() {
    this.props.getMatches(this.props.data);
  }

  render() {
    const { loading, data } = this.props;
    return (
      <Fragment>
        <h1>Match History</h1>
        {loading && loading ? (
          <Spinner name="three-bounce" color="#00ADEE" />
        ) : (
          <ol>
            {data.map(item => (
              <li key={item.id}>
                <span className={getWinnerClass(item.winner === 'player_one')}>{item.player_one}</span> -{' '}
                <span className={getWinnerClass(item.winner === 'player_two')}>{item.player_two}</span>
              </li>
            ))}
          </ol>
        )}
      </Fragment>
    );
  }
}

Matches.propTypes = {
  getMatches: func.isRequired,
  data: arrayOf(shape({ PLAYER_ONE: string, PLAYER_TWO: string })),
  loading: bool
};

const mapStateToProps = state => ({
  data: state.matches.data,
  loading: state.matches.loading
});

const mapDispatchToProps = dispatch => ({
  getMatches: data => dispatch(actionsCreators.getMatches(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matches);
