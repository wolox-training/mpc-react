import { push } from 'connected-react-router';

import LoginService from '../../services/LoginService';
import { GAME, LOGIN } from '../../constants/routes';
import api from '../../config/api';
import { TOKEN } from '../../constants/auth';

export const actions = {
  AUTH_INIT: '@@AUTH_INIT',
  LOGIN: '@@LOGIN/LOGIN',
  LOGIN_SUCCESS: '@@LOGIN/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@LOGIN/LOGIN_FAILURE',
  LOGOUT: '@@LOGOUT/LOGOUT',
  LOGOUT_SUCCESS: '@@LOGOUT/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: '@@LOGOUT/LOGOUT_FAILURE'
};

const actionsAuth = {
  authInit: () => dispatch => {
    const token = localStorage.getItem({ TOKEN });
    if (token) {
      dispatch({
        type: actions.AUTH_INIT,
        payload: true
      });
    } else {
      dispatch({
        type: actions.AUTH_INIT,
        payload: false
      });
    }
  },
  login: values => async dispatch => {
    dispatch({
      type: actions.LOGIN
    });
    const response = await LoginService.login(values);
    if (response.ok) {
      const tokenEnc = window.btoa(response.data.token);
      api.setHeader(TOKEN, tokenEnc);
      localStorage.setItem(TOKEN, tokenEnc);
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: { token: response.data, email: values.email }
      });
      dispatch(push(GAME));
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.problem
      });
    }
  },
  logout: () => dispatch => {
    dispatch(push(LOGIN));
    localStorage.removeItem(TOKEN);
    dispatch({
      type: actions.LOGOUT_SUCCESS
    });
    if (!actions.LOGIN_SUCCESS) {
      dispatch({
        type: actions.LOGOUT_FAILURE
      });
    }
  }
};

export default actionsAuth;
