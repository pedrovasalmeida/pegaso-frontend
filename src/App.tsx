import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

import GlobalStyles from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
    <GlobalStyles />
  </>
);

export default App;
