import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allCountries } from "../data/allCountries";
import Countries from "../components/Countries";

export default function CountryPages(params) {
  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  function toggleVisitedCountries(country) {
    let newVisitedCountries = [...visitedCountries];

    const isCountryVisited = newVisitedCountries.indexOf(country) !== -1;

    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter(visitedCountry => {
        return visitedCountry !== country
      })
    } else {
      newVisitedCountries.push(country);
    }

    setVisitedCountries(newVisitedCountries);
  }

  const countryFilterLowercase = countryFilter.trim().toLowerCase();

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
        <Countries
          visitedCountries={visitedCountries}
          onClickCountry={toggleVisitedCountries}
        >
            {filteredCountries}
        </Countries>
      </Main>
    </div>
  )
}