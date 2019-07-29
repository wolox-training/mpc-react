import api from '../config/api';

const url = 'http://localhost:3005/login';

export default {
  login: data => api.post(url, data, { headers: { 'x-gigawatts': '1.21' } })
};
