import React from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './styles/index.css';
import countries from './model/countriesData';
import { useEffect, useState } from 'react';
import DesplayedCountriesList from './core/Countries';
import InputField from './core/InputField';

function App() {
//  const [countriesList, setCountriesList] = useState([]);
 const [isShowCountries, setShowCountries] = useState(false);
 const [currentInput, setCurrentInput] = useState('');
 const [isHidden, setIsHidden] = useState(false);

//  useEffect(() => {
//   setCountriesList(countries);
//  }, []); // componentDidMount - will happen only once, when the component mounted for the first time

//  const changeShowCountries = (trueOrFalse) => {
//     setShowCountries(trueOrFalse)
//   console.log('CHANGE');
//  };

 return (
  <div className="input-feild">
   <InputField
    changeDisplay={setShowCountries}
    isHidden={isHidden}
    setIsHidden={setIsHidden}
    setCurrentInput={setCurrentInput}
   />

   {isShowCountries && (
    <DesplayedCountriesList list={countries} isHidden={isHidden} currentInput={currentInput} />
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
