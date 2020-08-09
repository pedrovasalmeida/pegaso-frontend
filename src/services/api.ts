import axios from 'axios';

/** https://desolate-falls-81734.herokuapp.com */

const local = 'http://localhost:3333';
const heroku = 'https://agile-castle-69221.herokuapp.com';

const api = axios.create({
  baseURL: heroku,
});

export default api;
