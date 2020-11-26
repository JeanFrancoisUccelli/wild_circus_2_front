import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://wildcircus2back.herokuapp.com/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader(), crossdomain: true } );
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader(), crossdomain: true });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader(), crossdomain: true });
  }
}

export default new UserService();
