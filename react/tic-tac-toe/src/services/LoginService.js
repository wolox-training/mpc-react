import api from '../config/api';

const url = '/login';

export default {
  login: data => api.post(url, data)
};
