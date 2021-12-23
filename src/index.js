import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import App from './App';



// https://api.coingecko.com/api/v3/coins/markets?vs_currency=KSH&order=market_cap_desc&per_page=100&page=1&sparkline=false
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



