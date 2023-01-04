import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";

export default function CountryPages(params) {
  const [countryFilter, setCountryFilter] = useState('Brazil');

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

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