import axios from 'axios';

const local = 'http://localhost:3333';
const heroku = 'https://withpostgres.herokuapp.com';

const api = axios.create({
  baseURL: heroku,
});

export default api;
