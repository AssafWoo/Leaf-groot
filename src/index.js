import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './Common/theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import ThemeButton from './Common/theme/theme_button';


ReactDOM.render(
  <>
  <ThemeProvider theme={theme}>
    <ChakraProvider vider theme={theme}>
        <ThemeButton />
          <App />
    </ChakraProvider>
  </ThemeProvider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
