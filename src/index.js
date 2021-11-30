import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import countries from './model/countriesData';
import { useState } from 'react';
import DesplayedCountriesList from './core/Countries';
import InputField from './core/InputField';

function App() {
 const [isShowCountries, setShowCountries] = useState(false);
 const [currentInput, setCurrentInput] = useState('');
 const [isHidden, setIsHidden] = useState(false);
 const [refToInput, setRefToInput] = useState('');

 return (
  <div
   className="input-container"
//    onBlur={() => {
//     setTimeout(() => {
//      setShowCountries(false);
//     }, 100);
//    }}
  >
   <InputField
    passToParent={setRefToInput}
    countries={countries}
    changeDisplay={setShowCountries}
    isHidden={isHidden}
    setIsHidden={setIsHidden}
    setCurrentInput={setCurrentInput}
    currentInput={currentInput}
   />

   {isShowCountries && (
    <DesplayedCountriesList
     refToInput={refToInput}
     list={countries}
     isHidden={isHidden}
     currentInput={currentInput}
     setCurrentInput={setCurrentInput}
    />
   )}
  </div>
 );
}

ReactDOM.render(
 <React.StrictMode>
  <App />
 </React.StrictMode>,
 document.getElementById('root')
);
