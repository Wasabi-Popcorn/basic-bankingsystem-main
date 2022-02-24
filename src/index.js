import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App/App';
import './index.css';

ReactDOM.render(
  <BrowserRouter basename='/'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

