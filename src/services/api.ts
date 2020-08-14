import axios from 'axios';

/** https://desolate-falls-81734.herokuapp.com */

const local = 'http://localhost:3333';
const heroku = 'https://withpostgres.herokuapp.com';

const api = axios.create({
  baseURL: local,
});

export default api;
