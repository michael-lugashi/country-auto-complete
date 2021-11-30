// import { useRef } from "react";
function DesplayedCountriesList(props) {
 const filter = new RegExp(props.currentInput, 'i');
 const list = props.list.filter((country) => filter.test(country.name));

 return (
  <ul
   style={props.isHidden ? { display: 'none' } : { display: 'block' }}
   className="countries-list"
  >
   {list.map((country) => {
    return (
     <li
      onClick={() => {
       props.setCurrentInput(country.name);
      }}
      key={country.name}
     >
      {country.name}
     </li>
    );
   })}
  </ul>
 );
}

export default DesplayedCountriesList;
