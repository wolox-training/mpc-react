import { push } from 'connected-react-router';

import LoginService from '../../services/LoginService';

export const actions = {
  LOGIN: '@@LOGIN/LOGIN',
  LOGIN_SUCCESS: '@@LOGIN/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@LOGIN/LOGIN_FAILURE'
};

const actionsLogin = {
  login: values => async dispatch => {
    dispatch({
      type: actions.LOGIN
    });
    const response = await LoginService.login(values);
    if (response.ok) {
      dispatch(push('/game'));
      window.localStorage.setItem('token', JSON.stringify(response.data.token));
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionsLogin;
