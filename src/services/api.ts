import axios from 'axios';

const DatabaseConnectionLink = {
  local: 'http://localhost:3333',
  heroku: 'https://withpostgres.herokuapp.com',
};

const { heroku } = DatabaseConnectionLink;

const api = axios.create({
  baseURL: heroku,
});

export default api;
