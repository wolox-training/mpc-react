import api from '../config/api';

export default {
  getMatch: () => api.get('/matches')
};
