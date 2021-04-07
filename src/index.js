import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './Components/Theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <ChakraProvider vider theme={theme}>
            <App />
      </ChakraProvider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
