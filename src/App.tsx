import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import Routes from './routes';

import { AuthProvider } from './context/AuthContext';
/** Header */
import Header from './components/Header';

import Theme from './styles/Theme';
import GlobalStyles from './styles/global';

import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

ReactGA.initialize('UA-192907132-1');

const App: React.FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const iframes = document.querySelectorAll('iframe');
      if (iframes.length > 0) {
        clearInterval(interval)
        iframes.forEach(iframe => {
          // eslint-disable-next-line no-param-reassign
          iframe.setAttribute('style', 'display: none !important;')
        })
      }
    }, 500);
  }, [])
  
  return (
    <Theme>
      <BrowserRouter>
        <Header />
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <Footer />
      </BrowserRouter>
  
      <GlobalStyles />
    </Theme>
  )
};

export default App;
