import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/bootstrap-5.3.1-dist/css/bootstrap.min.css';
import './assets/boxicons-2.1.4/css/boxicons.min.css';
import './index.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
