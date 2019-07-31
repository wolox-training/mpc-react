import { push } from 'connected-react-router';

import LoginService from '../../services/LoginService';
import { GAME } from '../../constants/routes';
import api from '../../config/api';
import { TOKEN } from '../../constants/auth';

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
      const tokenEnc = window.btoa(response.data.token);
      api.setHeader(TOKEN, tokenEnc);
      dispatch(push(GAME));
      localStorage.setItem(TOKEN, tokenEnc);
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
