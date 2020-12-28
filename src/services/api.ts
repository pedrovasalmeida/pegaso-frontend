import axios from 'axios';

const DatabaseConnectionLinks = {
  local: 'http://localhost:3333',
  heroku: 'https://withpostgres.herokuapp.com',
};

const { heroku } = DatabaseConnectionLinks;

const api = axios.create({
  baseURL: heroku,
});

export default api;
