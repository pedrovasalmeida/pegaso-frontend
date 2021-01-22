import axios from 'axios';

// eslint-disable-next-line
const { REACT_APP_BASE_URL_HEROKU, REACT_APP_BASE_URL_LOCAL, NODE_ENV } = process.env;

const api = axios.create({
  baseURL:
    // NODE_ENV === 'development' ? REACT_APP_BASE_URL_LOCAL : REACT_APP_BASE_URL_HEROKU,
    REACT_APP_BASE_URL_HEROKU,
});

export default api;
