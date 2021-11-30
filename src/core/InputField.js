import { useRef } from 'react';
import { useState, useEffect } from 'react/cjs/react.development';

function InputField(props) {
 const inputRef = useRef(null);
 const countryNames = props.countries.map((country) =>
  country.name.toLowerCase()
 );
 // remove this state and make delete btn work
 const [showX, setShowX] = useState(false);

 useEffect(() => {
  setShowX(countryNames.includes(inputRef.current.value.toLowerCase()));
 }, [countryNames]);

 useEffect(() => {
  props.passToParent(inputRef);
 }, [props]);

 return (
  <div className="auto-input">
   <input
    className="input-bar"
    value={props.currentInput}
    // autoFocus
    ref={inputRef}
    onFocus={() => {
     props.changeDisplay(true);
    }}
    onChange={(event) => {
     props.setCurrentInput(event.target.value);
    }}
    type="text"
   />

   <span
    className="hide-btn"
    onClick={() => {
     inputRef.current.focus();
     props.setIsHidden(!props.isHidden);
    }}
   >
    {props.isHidden ? '🔼' : '🔽'}
   </span>

   {showX && (
    <span
     className={'delete-btn'}
     onClick={() => {
      inputRef.current.value = '';
      props.setCurrentInput('');
     }}
    >
     ❌
    </span>
   )}
  </div>
 );
}

export default InputField;
