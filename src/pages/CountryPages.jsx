import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allCountries } from "../data/allCountries";

export default function CountryPages(params) {
  const [countryFilter, setCountryFilter] = useState('Brazil');

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  const countryFilterLowercase = countryFilter.toLowerCase();

  const filteredCountries = countryFilterLowercase.length >= 3 ?
    allCountries.filter(({name}) => {
    return name.toLowerCase().includes(countryFilterLowercase);
  }) : allCountries;

  return(
    <div>
      <Header>Countries</Header>
      <Main>
        <TextInput 
          id="inputCountryFilter"
          labelDescription="Informe o nome do País (pelo menos 3 caracteres):"
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        />
      </Main>
    </div>
  )
}