import api from '../config/api';

export default {
  getUser: () => api.get('/users')
};
