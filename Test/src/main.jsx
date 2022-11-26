import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from '../../Test/src/Hello';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello name="Davi" />
  </React.StrictMode>
);
