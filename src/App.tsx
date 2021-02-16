import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { AuthProvider } from './context/AuthContext';
/** Header */
import Header from './components/Header';

import Theme from './styles/Theme';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Theme>
    <BrowserRouter>
      <Header />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>

    <GlobalStyles />
  </Theme>
);

export default App;
