function DesplayedCountriesList(props) {
 const filter = new RegExp(props.currentInput, 'i');
 const list = props.list.filter((country) => filter.test(country.name));

 return (
  <ul style={props.isHidden ? {display: 'none'}: {display: 'block'} }className="countries-list">
   {list.map((country) => {
    return <li key={country.name}>{country.name}</li>;
   })}
  </ul>
 );
}

export default DesplayedCountriesList;
