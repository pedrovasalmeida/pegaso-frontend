import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import Routes from './routes';

import { AuthProvider } from './context/AuthContext';
/** Header */
import Header from './components/Header';

import Theme from './styles/Theme';
import GlobalStyles from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

ReactGA.initialize('UA-192907132-1');

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
