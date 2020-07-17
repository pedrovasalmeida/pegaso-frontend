import axios from 'axios';

/** https://desolate-falls-81734.herokuapp.com */
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
