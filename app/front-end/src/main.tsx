import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset, { Reset } from 'styled-reset';
import { App } from './App';
import { TaskProvider } from './context/TaskProvider';

const GlobalStyle = createGlobalStyle`
  ${reset}
  box-sizing: border-box;
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <TaskProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskProvider>
  </React.StrictMode>,
);
