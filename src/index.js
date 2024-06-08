import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/ContextProvider';
import { StyledEngineProvider } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
    <BrowserRouter>
    <ContextProvider>
    {/* <StyledEngineProvider injectFirst> */}
    <App />
    {/* </StyledEngineProvider> */}
    </ContextProvider>
    </BrowserRouter>
  // </React.StrictMode>
);


