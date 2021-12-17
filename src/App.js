import './App.css';
import axios from 'axios';
import React,{useState,useEffect}  from 'react';

function App() {


  useEffect(() =>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=KSH&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  })

  return (
    <div className="App">
     <p>Just trying this shit</p>
    </div>
  );
}

export default App;
