import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { DuckiesContextProvider } from './context/DuckiesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DuckiesContextProvider> */}
    <App />
    {/* </DuckiesContextProvider> */}
  </React.StrictMode>
);


