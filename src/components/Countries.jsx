import Country from "./Country"

export default function Countries({
  children: countries=[],
  onClickCountry=null,
  visitedCountries=[],
}) {
  return(
    <div>
      <h2 className="text-center font-semibold">{countries.length} pais(es)</h2>
      <h3 className="text-center font-semibold text-sm">
        {visitedCountries.length} pais(es) visitados
      </h3>

      {
        countries.map(country => {
          const isVisited = visitedCountries.indexOf(country) !== -1;

          return <Country isVisited={isVisited} onClickCountry={onClickCountry} key={country.name}>{country}</Country>
        })
      }
    </div>
  )
}