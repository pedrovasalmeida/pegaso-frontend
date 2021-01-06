import axios from 'axios';

/** using heroku postgres-db as main, even in development */
const {
  REACT_APP_BASE_URL_HEROKU,
  // REACT_APP_BASE_URL_LOCAL,
  NODE_ENV,
} = process.env;

const api = axios.create({
  baseURL:
    NODE_ENV === 'development'
      ? REACT_APP_BASE_URL_HEROKU
      : REACT_APP_BASE_URL_HEROKU,
});

export default api;
