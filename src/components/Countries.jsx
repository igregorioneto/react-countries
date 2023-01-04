import Country from "./Country"

export default function Countries({
  children: countries=[],
  onClickCountry=null
}) {
  return(
    <div>
      <h2 className="text-center font-semibold">{countries.length} pais(es)</h2>

      {
        countries.map(country => {
          return <Country onClickCountry={onClickCountry} key={country.name}>{country}</Country>
        })
      }
    </div>
  )
}