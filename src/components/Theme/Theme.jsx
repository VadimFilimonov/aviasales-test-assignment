import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    black: '#4a4a4a',
    blue: '#2196f3',
    gullGray: '#a0b0b9',
    white: '#fff',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
