import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    light: {
      lightBlue: '#0e6387',
      darkBlue: '#062733',
      gray: '#a9aaae',
    },
  },
  fonts: ['Roboto', 'Raleway', 'sans-serif'],
};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
