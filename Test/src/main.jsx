import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from '../../Test/src/Counter';
import Hello from '../../Test/src/Hello';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello name="Davi"> Seja bem-vindo(a) a disciplina de Desenvolvimento Web! </Hello>
    <br/>
    <Counter/>
  </React.StrictMode>
);
