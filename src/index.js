import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import countries from './model/countriesData'


ReactDOM.render(
  <React.StrictMode>
    {console.log(countries)}
  </React.StrictMode>,
  document.getElementById('root')
);

