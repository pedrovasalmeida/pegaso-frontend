import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';

import { AuthProvider } from './context/AuthContext';

import Theme from './styles/Theme';

import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Theme>
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
    <GlobalStyles />
  </Theme>
);

export default App;
