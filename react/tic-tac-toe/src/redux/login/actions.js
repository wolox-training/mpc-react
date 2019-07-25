import UsersService from '../../services/UsersService';

export const actions = {
  LOGIN: '@@LOGIN/LOGIN',
  LOGIN_SUCCESS: '@@LOGIN/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@LOGIN/LOGIN_FAILURE'
};

const actionsLogin = {
  login: values => async dispatch => {
    dispatch({
      type: actions.LOGIN,
      payload: values
    });
    const response = await UsersService.getUser();
    if (response.ok) {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response.values
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
