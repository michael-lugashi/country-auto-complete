import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import countries from './model/countriesData';
import { useState } from 'react';
import DesplayedCountriesList from './core/Countries';
import InputField from './core/InputField';
// change it so value of input is stored and set here
function App() {
 //  const [countriesList, setCountriesList] = useState([]);
 const [isShowCountries, setShowCountries] = useState(false);
 const [currentInput, setCurrentInput] = useState('');
 const [isHidden, setIsHidden] = useState(false);
 const [refToInput, setRefToInput] = useState('');
 //  useEffect(() => {
 //   setCountriesList(countries);
 //  }, []); // componentDidMount - will happen only once, when the component mounted for the first time

 //  const changeShowCountries = (trueOrFalse) => {
 //     setShowCountries(trueOrFalse)
 //   console.log('CHANGE');
 //  };

 return (
  <div
   className="input-feild"
   onBlur={() => {
    setTimeout(() => {
     setShowCountries(false);
    }, 100);
   }}
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
