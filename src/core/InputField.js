import { useRef } from 'react';

function InputField(props) {
 const inputRef = useRef(null);

 return (
  <div className="auto-input">
   <input
    // autoFocus
    ref={inputRef}
    onBlur={() => {
     props.changeDisplay(false);
    }}
    onFocus={() => {
     props.changeDisplay(true);
    }}
    onInput={(event) => {
     props.setCurrentInput(event.target.value);
    }}
    type="text"
   />

   <button
    onClick={() => {
     inputRef.current.focus();
     props.setIsHidden(!props.isHidden);
    }}
   >
    {props.isHidden ? '🔼' : '🔽'}
   </button>
   <button
    onClick={() => {
     inputRef.current.focus();
     props.setIsHidden(!props.isHidden);
    }}
   >
    {props.isHidden ? '🔼' : '🔽'}
   </button>
  </div>
 );
}

export default InputField;
